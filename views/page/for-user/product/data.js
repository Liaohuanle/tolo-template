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

const productDetailInfo = {
  description: 'Dpx DNA Polymerase 是在吐露港生物科技有限公司经过生物工程技术筛选和改造后获得的一种高保真、快速DNA聚合酶。Dpx的保真性要高于市售大部分DNA聚合酶；其最适扩增温度为68 °C，扩增速度为每分钟2kb以上。对于常规模板能有效扩增8-10kb；对于困难模板的扩增效率，也明显好于同类产品。适合于蛋白表达载体的构建，基因点突变等高保真扩增反应。本产品不含DNA内切酶、外切酶和磷酸酯酶。',
  makeBy: 'Dpx DNA Polymerase',
  saveCondition: '-20摄氏度存储',
  unitDefine: '用λ噬菌体的DNA作为模板，设计引物，在68 °C、30分钟内掺入10 nmol的核苷酸的活性定义为1个活性单位 (U)',
  bookingInfo: {
    config: {
      proId: '产品货号',
      proInfo: '产品信息',
      proRule: '产品规格',
      proPrice: '产品价格'
    },
    data: [
      {
        proId: '21101/3098',
        proInfo: 'Dpx高保真酶 2XDpx premix 2XDpx premix（含loading dye）',
        proRule: '1000/5000',
        proPrice: '600/2500'
      },{
        proId: '21101/3098',
        proInfo: 'Dpx高保真酶 2XDpx premix 2XDpx premix（含loading dye）',
        proRule: '1000/5000',
        proPrice: '600/2500'
      },{
        proId: '21101/3098',
        proInfo: 'Dpx高保真酶 2XDpx premix 2XDpx premix（含loading dye）',
        proRule: '1000/5000',
        proPrice: '600/2500'
      },{
        proId: '21101/3098',
        proInfo: 'Dpx高保真酶 2XDpx premix 2XDpx premix（含loading dye）',
        proRule: '1000/5000',
        proPrice: '600/2500'
      }
    ],
    description: '21203/21213为1管50mL装；21202/21212为5管1mL（#21201/21211）装；21102为5管1'
  }
}

const productComment = {
  total: 437,
  list: [
    {
      profile: '/static/comment-profile.png',
      name: 'hello kitty',
      size: '45ML',
      comment: '产品很不错！！！！'
    },
    {
      profile: '/static/comment-profile.png',
      name: 'hello kitty',
      size: '45ML',
      comment: '产品很不错！！！！'
    },{
      profile: '/static/comment-profile.png',
      name: 'hello kitty',
      size: '45ML',
      comment: '产品很不错！！！！'
    },{
      profile: '/static/comment-profile.png',
      name: 'hello kitty',
      size: '45ML',
      comment: '产品很不错！！！！'
    },{
      profile: '/static/comment-profile.png',
      name: 'hello kitty',
      size: '45ML',
      comment: '产品很不错！！！！'
    },{
      profile: '/static/comment-profile.png',
      name: 'hello kitty',
      size: '45ML',
      comment: '产品很不错！！！！'
    }
  ]
}

module.exports = {
  breadCrumbList,
  sameProductsRecomand,
  goodsList,
  goodsInfo,
  specification,
  goodsRest,
  productDetailInfo,
  productComment
}