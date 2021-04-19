terraform {
  backend "s3" {
    encrypt = true
    bucket = "kitchenator-state-bucket"
    region = "eu-west-1"
    key = "state-bucket.tfstate"
    dynamodb_table = "kitchenator-state-lock"
  }
}
