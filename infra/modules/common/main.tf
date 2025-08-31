data "aws_route53_zone" "domain" {
  name         = "devandcloud.com." # your domain name !
  private_zone = false              # true if it is a private zone
}

output "hosted_zone_id" {
  value = data.aws_route53_zone.domain.id
}