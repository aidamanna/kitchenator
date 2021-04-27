#!/usr/bin/env bash

cd "$(dirname "$0")"

ROLE_ARN="arn:aws:iam::${AWS_ACCOUNT_ID}:role/pipeline-role"

ASSUMED_ROLE=$(
    aws sts assume-role \
        --role-arn ${ROLE_ARN} \
        --role-session-name deploy-infrastructure
)

export AWS_SESSION_TOKEN=$(echo ${ASSUMED_ROLE} | jq -r '.Credentials.SessionToken')
export AWS_ACCESS_KEY_ID=$(echo ${ASSUMED_ROLE} | jq -r '.Credentials.AccessKeyId')
export AWS_SECRET_ACCESS_KEY=$(echo ${ASSUMED_ROLE} | jq -r '.Credentials.SecretAccessKey')

./state-bucket/apply.sh
./users/apply.sh
