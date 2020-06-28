const Koa = require('koa');
const convert = require('koa-convert');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = require('./routes');

app
  /* 使用日志中间件 */
  .use(convert(logger()))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  /* error */
  .on('error', (err) => {
    console.log(err);
  })
  .listen(4000);
