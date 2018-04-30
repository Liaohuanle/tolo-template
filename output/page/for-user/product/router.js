const generateView = require('../../../../util');
const data = require('./data');
module.exports = generateView({
  path: '/products',
  title: '吐露 - 产品详情',
  navSrc: `../nav/black-nav`,
  containerSrc: `${__dirname}/index`,
  footerSrc: '../footer/index',
  jsSrc: `../../page/for-user/product/run`,
  cssSrc: `../../page/for-user/product/css`,
  data
});
