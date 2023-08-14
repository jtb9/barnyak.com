#!/bin/bash
TARGET_BUCKET='barnyak.com'

echo "Running uploader...."

# while true; do
#     read -p "Your in the AWS environment ${AWS_PREFIX} are you sure you want to run this?" yn
#     case $yn in
#         [Yy]* ) aws s3 cp ./public s3://${TARGET_BUCKET}/ --recursive --acl public-read; break;;
#         [Nn]* ) exit;;
#         * ) echo "Please answer yes or no.";;
#     esac
# done

# echo "Building cloudfront invalidation..."

# aws cloudfront create-invalidation --distribution-id E1H7L6RMFQ0DR4 --paths '/*'

cd public

zip build.zip -r ./*

echo "Now manually deploy build.zip to cloudflare pages"

echo "Done"
