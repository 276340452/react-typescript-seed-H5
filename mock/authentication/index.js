/* 初始化路由 */
const router = require('koa-router')();

router.get('/:name', async (ctx) => {
  ctx.body = { name: ctx.params.name };
});

module.exports = router;
