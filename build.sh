#!/bin/bash
npm config set registry http://npm.yematech.cn/
npm install
if [[ $2 = 'pro' ]];
then
  npx cross-env PUBLIC_URL=$1 npm run env:pro && npm run build
elif [[ $2 = 'dev' ]];
then
  npx cross-env PUBLIC_URL=$1 npm run env:dev && npm run build
else
  npx cross-env PUBLIC_URL=$1 npm run env:alpha && npm run build
fi