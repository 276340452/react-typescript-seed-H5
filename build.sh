#!/bin/bash
npm config set registry http://npm.yematech.cn/
npm install
if [[ $1 = 'alpha' ]];
then
  npx cross-env npm run env:alpha && npm run build
elif [[ $1 = 'dev' ]];
then
  npx cross-env npm run env:dev && npm run build
else
  npx cross-env npm run env:pro && npm run build
fi