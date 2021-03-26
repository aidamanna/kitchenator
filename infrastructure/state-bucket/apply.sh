#!/usr/bin/env bash

cd "$(dirname "$0")"

echo "Creating s3 state bucket and dynamo table for locking state with local state"
mv backend.tf backend.tf.backup

set -euxo pipefail
rm -rf ./.terraform

terraform init
terraform plan -out=state-bucket.plan
terraform apply state-bucket.plan

mv backend.tf.backup backend.tf

echo "Enabling remote state"
rm -rf ./.terraform
terraform init
terraform plan -out=state-bucket.plan
terraform apply state-bucket.plan

echo "Cleaning up old local states"
rm state-bucket.plan
rm -rf ./.terraform
rm terraform.tfstate
rm terraform.tfstate.backup

echo "Successfully enabled terraform remote state"
