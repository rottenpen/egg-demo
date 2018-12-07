exports.keys = `aaaaaa`
exports.view = {
  defaultViewEngine: `nunjucks`,
  mapping: {
    '.tpl': `nunjucks`
  }
}
exports.middleware = [
  'robot'
]
exports.robot = {
  ua: [
    /Baiduspider/i,
    /curl/i
  ]
}
exports.news = {
  pageSize: 5,
  serverUrl: 'http://api.zhuishushenqi.com/'
}