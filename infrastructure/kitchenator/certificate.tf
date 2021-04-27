provider "aws" {
  region = "us-east-1"
  alias = "virginia"
}

resource "aws_acm_certificate" "certificate" {
  domain_name = local.domain_name
  validation_method = "DNS"
  provider = aws.virginia

  tags = {
    Name = "devicenator-certificate"
  }
}

resource "aws_route53_record" "certificate_validation" {
  name = aws_acm_certificate.certificate.domain_validation_options[0].resource_record_name
  type = aws_acm_certificate.certificate.domain_validation_options[0].resource_record_type
  zone_id = data.aws_route53_zone.devicenator.zone_id
  records = [aws_acm_certificate.certificate.domain_validation_options[0].resource_record_value]
  ttl = 60
}

resource "aws_acm_certificate_validation" "certificate_validation" {
  certificate_arn = aws_acm_certificate.certificate.arn
  validation_record_fqdns = [aws_route53_record.certificate_validation.fqdn]
  provider = aws.virginia
}
