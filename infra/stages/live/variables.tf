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
  default = ""
}
variable "zone_id" {
  type    = string
}
variable "record_name" {
  type    = string
}
