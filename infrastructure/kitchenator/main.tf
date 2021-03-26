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
  region = local.region
}
