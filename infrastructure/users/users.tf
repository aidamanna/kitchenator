resource "aws_iam_user" "travis-kitchenator" {
  name = local.travis_user
}

resource "aws_iam_access_key" "travis-kitchenator" {
  user = aws_iam_user.travis-kitchenator.name
}

resource "aws_iam_role" "pipeline-role" {
  name = "pipeline-role"
  assume_role_policy = data.aws_iam_policy_document.assume-rol-policy-document.json
}

data "aws_iam_policy_document" "assume-rol-policy-document" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      identifiers = ["arn:aws:iam::${var.account_id}:user/${local.travis_user}"]
      type = "AWS"
    }
  }
}

resource "aws_iam_policy" "pipeline-policy" {
  name        = "pipeline"
  description = "Policy for creating the project infrastructure"
  policy = data.aws_iam_policy_document.pipeline-policy-document.json
}

data "aws_iam_policy_document" "pipeline-policy-document" {
  statement {
    effect = "Allow"
    actions = [
      "dynamodb:*",
      "iam:*",
      "kms:*",
      "route53:*",
      "s3:*",
      "acm:*",
      "cloudfront:*"
    ]
    resources = ["*"]
  }
}

resource "aws_iam_role_policy_attachment" "ecr-policy-attachment" {
  role       = aws_iam_role.pipeline-role.name
  policy_arn = aws_iam_policy.pipeline-policy.arn
}
