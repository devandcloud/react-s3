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
    dns_name              = string
    zone_id               = string
    evaluate_target_health = bool
  })
}

resource "aws_route53_record" "this" {
  zone_id = var.zone_id
  name    = var.record_name
  type    = var.record_type

  alias {
    name                   = var.alias_target.dns_name
    zone_id                = var.alias_target.zone_id
    evaluate_target_health = var.alias_target.evaluate_target_health
  }
}
