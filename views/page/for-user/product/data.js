const breadCrumbList = [
  {
    href: '#',
    title: '全部',
    isActive: false
  },{
    href: '?target=PRC系列',
    title: 'PRC系列',
    isActive: false
  },{
    href: '?target=RT-PCR',
    title: 'RT-PCR',
    isActive: true
  }
]

const sameProductsRecomand = [
  {
    title: 'E. coli DNA  Polymerase I',
    price: '300',
    desc: 'E. coli DNA Polymerase I',
    type: 'MENT',
    src: '/static/lasted-producted.png',
    sales: Math.floor( Math.random()*1000),
    date: '2017.09.13',
    isOnline: true
  },{
    title: 'E. coli DNA  Polymerase I',
    price: Math.floor( Math.random()*1300),
    desc: 'E. coli DNA Polymerase I',
    type: 'MENT',
    src: '/static/lasted-producted.png',
    sales: Math.floor( Math.random()*1000),
    date: '2017.11.13',
    isOnline: false
  },{
    title: 'E. coli DNA  Polymerase I',
    price: Math.floor( Math.random()*1300),
    desc: 'E. coli DNA Polymerase I',
    type: 'MENT',
    src: '/static/lasted-producted.png',
    sales: Math.floor( Math.random()*1000),
    date: '2018.01.19',
    isOnline: true
  },{
    title: 'E. coli DNA  Polymerase I',
    price: Math.floor( Math.random()*1300),
    desc: 'E. coli DNA Polymerase I',
    type: 'MENT',
    src: '/static/lasted-producted.png',
    sales: Math.floor( Math.random()*1000),
    date: '2018.03.22',
    isOnline: true
  }
]

const goodsList = [
  '/static/zoom-pic.png',
  '/static/zoom-pic.png',
  '/static/zoom-pic.png',
  '/static/zoom-pic.png',
  '/static/zoom-pic.png',
  '/static/zoom-pic.png'
]

const goodsInfo = {
  title: 'Dpx高保真聚合酶',
  description: 'Dpx DNA Polymerase 是在吐露港生物科技有限公司经过生物工程技术筛选和改造后获得的一种高保真、快速DNA聚合酶',
  price: '400',
  vipPrice: '360',
  information: [
    {
      key: '上架',
      value: '2018-01-29'
    },{
      key: '产品货号',
      value: '01-25556'
    },{
      key: '销量',
      value: '8345'
    },{
      key: '评价',
      value: '479'
    },{
      key: '送吐露港积分',
      value: '1000'
    }
  ]
}

const specification = {
  unit: 'ML',
  value: [ 1, 5, 50 ]
}

const goodsRest = {
  number: 500,
  tip: '无货，预计23天到货',
  hasGoods: false
}

module.exports = {
  breadCrumbList,
  sameProductsRecomand,
  goodsList,
  goodsInfo,
  specification,
  goodsRest
}