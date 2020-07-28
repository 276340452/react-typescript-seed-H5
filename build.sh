#!/bin/bash
npm config set registry http://npm.yematech.cn/
npm install
npx cross-env PUBLIC_URL=$1 API_URL=$2 node node_env.js && npm run build