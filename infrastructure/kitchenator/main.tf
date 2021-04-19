terraform {
  backend "s3" {
    encrypt = true
    bucket = "kitchenator-state-bucket"
    region = "eu-west-1"
    key = "kitchenator.tfstate"
    dynamodb_table = "kitchenator-state-lock"
  }
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = local.region
}
