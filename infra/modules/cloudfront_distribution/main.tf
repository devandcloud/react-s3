provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"
}

# 1️⃣ Certificat ACM pour ton sous-domaine (en us-east-1 obligatoire)
resource "aws_acm_certificate" "this" {
  provider                  = aws.us-east-1
  domain_name               = var.record_name
  subject_alternative_names = ["www.${var.record_name}"]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# 2️⃣ DNS record pour valider le certificat
resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.this.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      type   = dvo.resource_record_type
      record = dvo.resource_record_value
    }
  }

  zone_id = var.zone_id
  name    = each.value.name
  type    = each.value.type
  records = [each.value.record]
  ttl     = 60
}

# 3️⃣ Validation ACM
resource "aws_acm_certificate_validation" "this" {
  provider                = aws.us-east-1
  certificate_arn         = aws_acm_certificate.this.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

# 4️⃣ Origin Access Identity
resource "aws_cloudfront_origin_access_identity" "this" {
  comment = "OAI for ${var.stage} ${var.project_name} distribution"
}

# 5️⃣ Distribution CloudFront
resource "aws_cloudfront_distribution" "this" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "${var.project_name} CloudFront distribution for ${var.stage}"
  default_root_object = "index.html"

  aliases = [var.record_name, "www.${var.record_name}"] # 🔹 Alternate Domain Names
  
  # Configuration VPC - Utilisation du VPC existant via les politiques de sécurité et les groupes de sécurité

  origin {
    domain_name = "${var.s3_bucket_name}.s3.${var.aws_region}.amazonaws.com"
    origin_id   = "s3-${var.s3_bucket_name}"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.this.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "s3-${var.s3_bucket_name}"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.redirect_www_and_rewrite_html.arn
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.this.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  tags = var.tags

  depends_on = [aws_acm_certificate_validation.this] # 🔹 Attendre validation certif
}

# 6️⃣ CloudFront Function pour rewrite to .html and redirect www to non-www
resource "aws_cloudfront_function" "redirect_www_and_rewrite_html" {
  name    = "${var.project_name}-${var.stage}-redirect-www-rewrite-html"
  runtime = "cloudfront-js-1.0"
  comment = "Redirect www to non-www and rewrite URLs to .html"
  publish = true

  code = <<EOT
function handler(event) {
    var request = event.request;
    var uri = request.uri;
    var host = request.headers.host.value;

    // 🔹 Redirection www → non-www
    if (host.startsWith("www.")) {
        var newHost = host.slice(4);
        return {
            statusCode: 301,
            statusDescription: "Moved Permanently",
            headers: {
                "location": { "value": "https://" + newHost + uri }
            }
        };
    }

    // 🔹 Réécriture .html
    if (uri === "/" || uri === "") {
        uri = "/fr";
    }

    if (uri.includes('.')) {
        request.uri = uri;
        return request;
    }

    if (uri.endsWith('/')) {
        uri = uri.slice(0, -1);
    }

    request.uri = uri + ".html";
    return request;
}
EOT
}


# 7️⃣ DNS pour pointer vers CloudFront
resource "aws_route53_record" "alias_cf" {
  zone_id = var.zone_id
  name    = var.record_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.this.domain_name
    zone_id                = aws_cloudfront_distribution.this.hosted_zone_id
    evaluate_target_health = false
  }
}
resource "aws_route53_record" "alias_cf_www" {
  zone_id = var.zone_id
  name    = "www.${var.record_name}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.this.domain_name
    zone_id                = aws_cloudfront_distribution.this.hosted_zone_id
    evaluate_target_health = false
  }
}
