# Configuration du bucket S3
resource "aws_s3_bucket" "this" {
  bucket = var.site_bucket_name
  tags   = var.tags
  force_destroy = true
}

# Configuration du contrôle d'accès du bucket
resource "aws_s3_bucket_ownership_controls" "this" {
  bucket = aws_s3_bucket.this.id
  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

# Configuration du versioning
resource "aws_s3_bucket_versioning" "this" {
  bucket = aws_s3_bucket.this.id
  versioning_configuration {
    status = "Enabled"
  }
}

# Règle de cycle de vie
resource "aws_s3_bucket_lifecycle_configuration" "this" {
  bucket = aws_s3_bucket.this.id

  rule {
    id     = "expire-old-versions"
    status = "Enabled"

    expiration {
      days = 30
    }
  }
}

# Configuration du chiffrement
resource "aws_s3_bucket_server_side_encryption_configuration" "this" {
  bucket = aws_s3_bucket.this.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# Configuration du point de terminaison VPC pour S3 (si nécessaire)
resource "aws_vpc_endpoint" "s3" {
  count = var.vpc_config != null ? 1 : 0
  
  vpc_id            = var.vpc_config.vpc_id
  service_name      = "com.amazonaws.${data.aws_region.current.name}.s3"
  vpc_endpoint_type = "Gateway"
  
  route_table_ids = [for rt in data.aws_route_tables.private[0].ids : rt]
  
  tags = merge(var.tags, {
    Name = "${var.tags["stage"]}-s3-endpoint"
  })
}

data "aws_region" "current" {}

data "aws_route_tables" "private" {
  count  = var.vpc_config != null ? 1 : 0
  vpc_id = var.vpc_config.vpc_id
  
  filter {
    name   = "tag:Type"
    values = ["private"]
  }
}

resource "aws_s3_bucket_policy" "this" {
  bucket = aws_s3_bucket.this.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontServicePrincipalReadOnly"
        Effect = "Allow"
        Principal = {
          AWS = var.cloudfront_oai_arn
        }
        Action   = ["s3:GetObject"]
        Resource = "${aws_s3_bucket.this.arn}/*"
      }
    ]
  })
}
