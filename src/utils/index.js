// 判定现在的环境
const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'

// development or production host
const hosts = {
  dev: 'http://localhost:8791',
  prod: 'https://tansuo.smackgg.cn'
}

module.exports = {
  env,
  host: hosts[env]
}
