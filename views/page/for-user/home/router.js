const generateView = require('../../../../util')
const data = require('./data')
module.exports = generateView({
  path: '/index',
  title: '吐露 - 首页',
  navSrc: `../nav/black-nav`,
  containerSrc: `${__dirname}/index`,
  footerSrc: '../footer/index',
  jsSrc: `../../page/for-user/home/run`,
  cssSrc: `../../page/for-user/home/css`,
  data
})