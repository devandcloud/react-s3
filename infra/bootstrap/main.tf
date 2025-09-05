terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "eu-west-1" # 👉 adapt to your region
}

# S3 Bucket to store states
resource "aws_s3_bucket" "tf_state" {
  bucket = "devandcloud-free-projects-states" # 👉 change the name (must be globally unique)

  tags = {
    Name        = "Terraform State Bucket"
    Environment = "infra"
  }
}

# Disable accidental deletion
resource "aws_s3_bucket_versioning" "tf_state" {
  bucket = aws_s3_bucket.tf_state.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "tf_state" {
  bucket = aws_s3_bucket.tf_state.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# DynamoDB Table for locking
resource "aws_dynamodb_table" "tf_locks" {
  name         = "free-projects-terraform-locks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }

  tags = {
    Name        = "Terraform Lock Table"
    Environment = "infra"
  }
}
