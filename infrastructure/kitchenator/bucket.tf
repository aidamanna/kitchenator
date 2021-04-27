resource "aws_s3_bucket" "kitchenator" {
  bucket = local.domain_name
  acl = "public-read"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_s3_bucket_policy" "kitchenator-bucket-policy" {
  bucket = aws_s3_bucket.kitchenator.id
  policy = data.aws_iam_policy_document.kitchenator-bucket-policy-document.json
}

data "aws_iam_policy_document" "kitchenator-bucket-policy-document" {
  statement {
    sid = "PublicReadGetObject"
    effect = "Allow"
    principals {
      identifiers = [
        "*"
      ]
      type = "*"
    }
    actions = [
      "s3:GetObject"
    ]
    resources = [
      "arn:aws:s3:::${local.domain_name}/*"
    ]
  }
}
