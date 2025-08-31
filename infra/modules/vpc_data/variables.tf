variable "vpc_id" {
  description = "ID of the existing VPC to use"
  type        = string
}

variable "tags" {
  description = "A map of tags to add to all resources"
  type        = map(string)
  default     = {}
}
