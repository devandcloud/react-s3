variable "s3_bucket_name" {
  type = string
}

variable "stage" {
  type = string
}

variable "project_name" {
  type = string
}

variable "tags" {
  type    = map(string)
  default = {}
}

variable "aws_region" {
  type    = string
  default = "eu-west-1"
}

variable "zone_id" {
  type = string
}
variable "record_name" {
  type = string
}
