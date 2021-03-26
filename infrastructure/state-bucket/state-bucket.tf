resource "aws_s3_bucket" "kitchenator-state-bucket" {
  bucket = "kitchenator-state-bucket"
  versioning {
    enabled = true
  }

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_dynamodb_table" "kitchenator-state-lock" {
  name = "kitchenator-state-lock"
  hash_key = "LockID"
  read_capacity = 20
  write_capacity = 20

  attribute {
    name = "LockID"
    type = "S"
  }
}
