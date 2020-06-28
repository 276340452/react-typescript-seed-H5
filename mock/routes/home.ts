const {
  request, summary, query, tags, responses, description,
} = require('koa-swagger-decorator');
const Mock = require('mockjs');

const tag = tags(['home']);

class HomeRouter {
  @request('GET', '/homes')
  @summary('测试GET接口')
  @description('测试home接口')
  @tag
  @query(
    { page: { type: 'number', description: '分页参数' } },
  )
  @responses(
    { 200: { description: 'success' } },
  )
  static async getHomes(ctx) {
    /* mock数据 */
    const data = await Mock.mock({
      'list|1-10': [{
        'name|12': '',
        createDate: Mock.Random.datetime(),
      }],
    });
    /* 设置response header */
    ctx.set('x-total-count', '10');
    /* 返回数据 */
    ctx.body = data.list;
  }
}
module.exports = HomeRouter;
