provider "aws" {
  region = "eu-west-1"
}

# Récupération des informations du VPC existant
module "vpc_data" {
  source = "../../modules/vpc_data"
  
  vpc_id = var.vpc_id
  
  tags = {
    stage   = "live"
    Project = "devandcloud"
  }
}

module "cloudfront" {
  source         = "../../modules/cloudfront_distribution"
  s3_bucket_name = module.s3.bucket_name
  stage          = "live"
  project_name   = "devandcloud-front"
  zone_id        = var.zone_id
  record_name    = var.record_name
  
  tags = {
    stage   = "live"
    Project = "devandcloud"
  }
}

module "s3" {
  source             = "../../modules/s3_private_bucket"
  site_bucket_name   = var.site_bucket_name
  cloudfront_oai_arn = module.cloudfront.oai_arn
  
  tags = {
    stage   = "live"
    Project = "devandcloud"
  }
}

output "cloudfront_domain" {
  value = module.cloudfront.distribution_domain_name
}
