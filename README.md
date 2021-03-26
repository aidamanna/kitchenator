# Kitchenator

Steps to deploy the infrastructure:
1. In travis-ci, set the `AWS_ACCOUNT_ID` environment variable.
2. Configure an AWS IAM user with the proper permissions to execute the scripts `infrastructure/apply.sh`
3. In travis-ci, set the environment variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` with the values 
created for the AWS travis user, `travis-kitchenator`.
