const Service = require('egg').Service

class NewsService extends Service {
  async list(page = 1) {
    const { serverUrl, pageSize } = this.config.news
    const { data: idList } = this.config.news
  }
}