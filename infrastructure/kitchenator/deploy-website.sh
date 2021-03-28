#!/usr/bin/env bash

set -euxo pipefail

aws s3 sync ./dist s3://devicenator.com --delete
