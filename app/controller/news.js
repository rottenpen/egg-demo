const Controller = require('egg').Controller

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx
    const page = ctx.query.page || 1
    const newsList = await ctx.service.news.ranking(page)
    await ctx.render('news/list.tpl', { ranking: newsList })
  }
}

module.exports = NewsController