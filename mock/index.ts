import Koa from 'koa';
import convert from 'koa-convert';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import router from './routes';

const app = new Koa();

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
