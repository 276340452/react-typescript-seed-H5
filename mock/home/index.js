/* 初始化路由 */
const router = require('koa-router')();
const Mock = require('mockjs');

/**
 * @api {get} /home/:id 测试代码
 * @apiName 获取mock数据
 * @apiGroup home
 *
 * @apiSampleRequest /home/
 * @apiSuccess {String} name随机参数
 */
router.get('/:id', async (ctx) => {
  /* mock数据 */
  const data = Mock.mock({
    'list|1-100': [{
      'name|12': '',
      createDate: Mock.Random.datetime(),
    }],
  });
  /* 设置response header */
  ctx.set('x-total-count', '10');
  /* 返回数据 */
  ctx.body = data.list;
});

module.exports = router;
