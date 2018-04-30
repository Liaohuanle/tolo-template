const HOME = require('./views/page/for-user/home/router')
const PRODUCT = require('./views/page/for-user/product/router')
const SERVICE = require('./views/page/for-user/service/router')
const SERVICEHOME = require('./views/page/for-user/service-home/router')
const PRODUCTLIST = require('./views/page/for-user/product-list/router')

module.exports = [
  HOME,
  PRODUCT,
  SERVICE,
  SERVICEHOME,
  PRODUCTLIST
]