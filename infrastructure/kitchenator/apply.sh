#!/usr/bin/env bash

set -euxo pipefail

cd "$(dirname "$0")"

rm -rf ./.terraform

terraform init
terraform plan -out=kitchenator.plan
terraform apply kitchenator.plan

rm kitchenator.plan
rm -rf ./.terraform
