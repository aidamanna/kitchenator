#!/usr/bin/env bash

set -euxo pipefail

cd "$(dirname "$0")"

rm -rf ./.terraform

terraform init
terraform plan \
    -var "account_id=${AWS_ACCOUNT_ID}" \
    -out=users.plan

terraform apply users.plan

rm users.plan
rm -rf ./.terraform
