#!/bin/bash
DIRECTORY=`dirname $0`
ROOT_DIR="$DIRECTORY/.."
DISTANT_DIR="/opt/containers/nginx/data/nginx/html/cv"
cd $ROOT_DIR
scp index.html ks-leo-noport:$DISTANT_DIR/
scp dist/app.min.js ks-leo-noport:$DISTANT_DIR/
scp -r assets ks-leo-noport:$DISTANT_DIR/
