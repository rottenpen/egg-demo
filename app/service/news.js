const Service = require('egg').Service

class NewsService extends Service {
  async ranking(page = 1) {
    const { serverUrl, pageSize } = this.config.news
    const { data: idList } = await this.ctx.curl(`${serverUrl}ranking/54d43437d47d13ff21cad58b`, {
      dataType: 'json'
    })
    // const newsList = await Promise.all(
    //   Object.keys(idList).map(key => {
    //     const url = `${serverUrl}/item/${idList[key]}.json`
    //     return this.ctx.curl(url, { dataType: 'json' })
    //   })
    // )
    // return newsList.map(res => res.data)
    return idList.ranking
  }
}

module.exports = NewsService
