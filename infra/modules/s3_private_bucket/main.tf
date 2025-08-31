resource "aws_s3_bucket" "this" {
  bucket = var.site_bucket_name

  tags = var.tags

  acl = "private"

  force_destroy = true

  versioning {
    enabled = true
  }

  lifecycle_rule {
    enabled = true
    expiration {
      days = 30
    }
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
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
