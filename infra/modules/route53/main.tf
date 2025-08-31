
module "common" {
  source = "../common"
}

resource "aws_route53_record" "subdomain" {
  zone_id = module.common.hosted_zone_id
  name    = var.record_name
  type    = var.record_type

  alias {
    name                   = var.alias_target.dns_name
    zone_id                = var.alias_target.zone_id
    evaluate_target_health = var.alias_target.evaluate_target_health
  }
}
