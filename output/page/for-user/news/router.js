const generateView = require('../../../../util');
const data = require('./data');
const name = '/news';
module.exports = generateView({
  path: name,
  title: '吐露 - 新闻',
  navSrc: `../nav/black-nav`,
  containerSrc: `${__dirname}/index`,
  footerSrc: '../footer/index',
  jsSrc: `../../page/for-user${name}/run`,
  cssSrc: `../../page/for-user${name}/css`,
  data
});
