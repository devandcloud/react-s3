provider "aws" {
  region = "eu-west-1"
}

# Récupération des informations du VPC existant
module "vpc_data" {
  source = "../../modules/vpc_data"
  
  vpc_id = var.vpc_id
  
  tags = {
    stage   = "dev"
    Project = "devandcloud-react-s3-demo"
  }
}

module "cloudfront" {
  source         = "../../modules/cloudfront_distribution"
  s3_bucket_name = module.s3.bucket_name
  stage          = "dev"
  project_name   = "devandcloud-react-s3-demo"
  zone_id        = var.zone_id
  record_name    = var.record_name
  
  tags = {
    stage   = "dev"
    Project = "devandcloud-react-s3-demo"
  }
}

module "s3" {
  source             = "../../modules/s3_private_bucket"
  site_bucket_name   = var.site_bucket_name
  cloudfront_oai_arn = module.cloudfront.oai_arn
  
  tags = {
    stage   = "dev"
    Project = "devandcloud-react-s3-demo"
  }
}

output "cloudfront_domain" {
  value = module.cloudfront.distribution_domain_name
}
