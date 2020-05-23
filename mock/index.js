const childProcess = require('child_process');
const Koa = require('koa');
const convert = require('koa-convert');
const logger = require('koa-logger');
const router = require('koa-router')();
const serve = require('koa-static');

const app = new Koa();
/* 使用日志中间件 */
app.use(convert(logger()));
/* 接口文档主页静态网页 把静态页统一放到doc中管理 */
const doc = serve('doc');
/* 引入API文档 */
const home = require('./home');
const authentication = require('./authentication');
/* 合并接口文档 */
router.use('/home', home.routes(), home.allowedMethods());
router.use('/authentication', authentication.routes(), authentication.allowedMethods());
/* 引入doc文档 */
app.use(doc);
/* 引入API */
app.use(router.routes(), router.allowedMethods());
/* error */
app.on('error', (err) => {
  console.log(err);
});
app.listen(4000);
/* 打开浏览器 */
childProcess.exec('start http://localhost:4000');
