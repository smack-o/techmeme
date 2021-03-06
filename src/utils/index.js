// 判定现在的环境
const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'

// development or production host
const hosts = {
  dev: 'http://localhost:8791',
  // dev: 'https://tansuo.smackgg.cn',
  prod: 'https://tansuo.smackgg.cn'
}

// 日期格式化
const dateFormat = function (date, format) {
  date = new Date(date)
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length))
  }

  for (let k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : (`00${o[k]}`).substr(`${o[k]}`.length))
    }
  }
  return format
}

module.exports = {
  env,
  host: hosts[env],
  dateFormat
}
