#!/usr/bin/env bash

cd state-bucket
./apply.sh
cd ..

cd users
./apply.sh
cd ..