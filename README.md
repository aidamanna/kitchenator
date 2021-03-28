# Kitchenator

Steps to deploy the infrastructure for the first time:
1. In travis-ci, set the `AWS_ACCOUNT_ID` environment variable.
2. Configure an AWS IAM user with the proper permissions and execute the script `infrastructure/apply.sh`
3. In travis-ci, set the environment variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` with the values 
created for the AWS travis user, `travis-kitchenator`.
4. Run the pipeline in travis-ci.
5. Go to cdmon and configure the name servers for the domain.
