exports.mysql = {
  clients: {
    db1: {
      host: 'mysql.com',
      port: '3306',
      user: 'test_user',
      password: 'test_password',
      database: 'test'
    },
    db2: {
      host: 'mysql.com',
      port: '3306',
      user: 'test_user',
      password: 'test_password',
      database: 'test'
    }
  },
  default: {
  },
  app: true,
  agent: false
}