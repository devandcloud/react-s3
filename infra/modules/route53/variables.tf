variable "zone_id" {
  type = string
}

variable "record_name" {
  type = string
}

variable "record_type" {
  type    = string
  default = "A"
}
variable "alias_target" {
  type = object({
    dns_name               = string
    zone_id                = string
    evaluate_target_health = bool
  })
}
