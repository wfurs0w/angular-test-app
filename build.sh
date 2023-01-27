#!/bin/bash

PROJECT_NAME="junior-test-app"
BRANCH="starterkit"

# Build artifact
zip -r ${PROJECT_NAME}-${BRANCH}.zip . -x ".*"
docker build -t ${PROJECT_NAME}-${BRANCH} -f Dockerfile-multibranch .
