resource "aws_route53_zone" "kitchenator" {
  name = local.domain_name
}

resource "aws_route53_record" "kitchenator" {
  zone_id = aws_route53_zone.kitchenator.zone_id
  name = local.domain_name
  type = "A"

  alias {
    name = aws_s3_bucket.kitchenator.website_domain
    zone_id = aws_s3_bucket.kitchenator.hosted_zone_id
    evaluate_target_health = false
  }
}