#!/bin/bash
#npm config set registry http://npm.yematech.cn/
npm install
npx cross-env PUBLIC_URL= API_URL=  npm run env:dev && npm run build