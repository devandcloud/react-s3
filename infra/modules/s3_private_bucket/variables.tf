variable "site_bucket_name" {
  type = string
}

variable "cloudfront_oai_arn" {
  type = string
}

variable "vpc_config" {
  description = "Configuration for VPC endpoints and access"
  type = object({
    vpc_id = string
  })
  default = null
}

variable "tags" {
  type    = map(string)
  default = {}
}
