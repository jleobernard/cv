#!/usr/bin/env bash
set -e
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/../
CV_VERSION=`grep version package.json | cut -d':' -f2 | cut -d'"' -f2`
rm -Rf dist
set PUBLIC_URL=https://cv.jleo.tech && set REACT_APP_API_ROOT_URL=https://cv.jleo.tech && npm run build
find dist -name '.DS_Store' -exec rm -f {} \;
docker build -t jleobernard/cv:$CV_VERSION --no-cache -f ./.docker/Dockerfile .
docker push jleobernard/cv:$CV_VERSION
