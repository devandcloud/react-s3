variable "vpc_id" {
  description = "ID of the existing VPC to use"
  type        = string
}

variable "aws_region" {
  type    = string
  default = "eu-west-1"
}

variable "stage" {
  type    = string
  default = "dev"
}
variable "site_bucket_name" {
  type    = string
  default = "devandcloud-tfstate"
}
variable "zone_id" {
  type    = string
}
variable "record_name" {
  type    = string
}
