#!/bin/bash
DIRECTORY=`dirname $0`
ROOT_DIR="$DIRECTORY/.."
cd $ROOT_DIR
scp index.html sw:/var/www/html/CV/
scp dist/app.min.js sw:/var/www/html/CV/
scp -r assets sw:/var/www/html/CV/