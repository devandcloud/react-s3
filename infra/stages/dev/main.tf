provider "aws" {
  region = "eu-west-1"
}

module "vpc" {
  source = "../../modules/vpc"

  vpc_cidr        = "10.0.0.0/16"
  public_subnets  = ["10.0.1.0/24", "10.0.2.0/24"]
  private_subnets = ["10.0.101.0/24", "10.0.102.0/24"]

  tags = {
    stage   = "dev"
    Project = "devandcloud"
  }
}

module "cloudfront" {
  source         = "../../modules/cloudfront_distribution"
  s3_bucket_name = module.s3.bucket_name
  stage          = "dev"
  project_name   = "devandcloud-front"
  zone_id        = var.zone_id
  record_name    = var.record_name
  tags = {
    stage   = "dev"
    Project = "devandcloud"
  }
}


module "s3" {
  source             = "../../modules/s3_private_bucket"
  site_bucket_name   = var.site_bucket_name
  cloudfront_oai_arn = module.cloudfront.oai_arn
  tags = {
    stage   = "dev"
    Project = "nextjs-site"
  }
}

output "cloudfront_domain" {
  value = module.cloudfront.distribution_domain_name
}
