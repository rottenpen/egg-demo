const moment = require('moment')

exports.relativeTime = time => moment(new Date(time)).fromNow()

exports.domain = url => url && url.split('/')[2]