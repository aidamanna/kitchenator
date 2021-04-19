#!/usr/bin/env bash

cd "$(dirname "$0")"
./state-bucket/apply.sh
./users/apply.sh
