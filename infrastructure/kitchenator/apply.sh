#!/usr/bin/env bash

set -euxo pipefail

rm -rf ./.terraform

terraform init
terraform plan -out=kitchenator.plan
terraform apply kitchenator.plan

rm kitchenator.plan
rm -rf ./.terraform
