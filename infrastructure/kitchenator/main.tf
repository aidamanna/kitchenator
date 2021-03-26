terraform {
  backend "s3" {
    encrypt = true
    bucket = "kitchenator-state-bucket"
    region = "eu-west-1"
    key = "kitchenator.tfstate"
    dynamodb_table = "kitchenator-state-lock"
  }
}

provider "aws" {
  assume_role {
    role_arn = "arn:aws:iam::${AWS_ACCOUNT_ID}:role/pipeline-role"
  }
  region = local.region
}
