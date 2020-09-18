#!/bin/bash
TARGET_BUCKET='barnyak.com'

echo "Running uploader...."

aws s3 cp ./radar_content.json s3://${TARGET_BUCKET}/radar_content.json --acl public-read

echo "Building cloudfront invalidation..."

aws cloudfront create-invalidation --distribution-id E1H7L6RMFQ0DR4 --paths '/*'

echo "Done"
