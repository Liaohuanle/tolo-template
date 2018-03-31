const bannerImageList = [
  'static/banner1.png',
  'https://wikiki.github.io/images/sushi.jpg',
  'https://wikiki.github.io/images/merry-christmas.jpg'
]

const productes = [
  {
    title: 'E. coli DNA  Polymerase I',
    price: '￥200',
    desc: 'E. coli DNA Polymerase I',
    type: 'MENT',
    src: '/static/lasted-producted.png'
  },{
    title: 'E. coli DNA  Polymerase I',
    price: '￥400',
    desc: 'E. coli DNA Polymerase I',
    type: 'MENT',
    src: '/static/lasted-producted.png'
  },{
    title: 'E. coli DNA  Polymerase I',
    price: '￥300',
    desc: 'E. coli DNA Polymerase I',
    type: 'MENT',
    src: '/static/lasted-producted.png'
  },{
    title: 'E. coli DNA  Polymerase I',
    price: '￥600',
    desc: 'E. coli DNA Polymerase I',
    type: 'MENT',
    src: '/static/lasted-producted.png'
  }
]

const lastedProduct = {
  title: '最新内容',
  content: '吐露港生物科技致力于科研和工业用酶的研发，已经开发成功的产品 PCR、克隆相关的载体和试剂.',
  productes,
}

const serviceProductes = [
  {
    imageUri: '/static/dna-footprint.png',
    desc: '“微生物基因组编辑”领域率先推出 团队专业  方法快速高效'
  },
  {
    imageUri: '/static/crispr.png',
    desc: '“微生物基因组编辑”领域率先推出 团队专业  方法快速高效'
  },
  {
    imageUri: '/static/zhilibuild.png',
    desc: '“微生物基因组编辑”领域率先推出 团队专业  方法快速高效'
  },
  {
    imageUri: '/static/crispr.png',
    desc: '“微生物基因组编辑”领域率先推出 团队专业  方法快速高效'
  },
]

const lastedServce = {
  title: '最新服务',
  content: '吐露港生物面向科研工作者提供各类技术服务,科技下一代测序（Next Generation Sequencing）建库相关的试剂(illumina平台），DNase I Footprinting assay和DNA/RNA EMSA等技术服务',
  serviceProductes,
}


const lastedNews = {
  title: '最新动态',
  newsList: [
    {
      date: '10/11/2017',
      content: '恭喜植生所合成生物学实验室赵国屏院士课题组发表最新研究论文',
      newsId: '110'
    },{
      date: '10/09/2017',
      content: '恭喜植生所合成生物学实验室赵国屏院士课题组发表最新研究论文',
      newsId: '110'
    },{
      date: '10/10/2017',
      content: '恭喜植生所合成生物学实验室赵国屏院士课题组发表最新研究论文',
      newsId: '110'
    }
  ]
}

const footerBanner = [
  {
    imageUri: '/static/illustratorObjFooter.png',
    title: '1.微生物基因组编辑，我们是专业的！',
    content: '针对您的微生物，我们来提供最适的CRISPR基因组编辑方案！'
  },
  {
    imageUri: '/static/illustratorObjFooter.png',
    title: '2.微生物基因组编辑，我们是专业的！',
    content: '针对您的微生物，我们来提供最适的CRISPR基因组编辑方案！'
  },
  {
    imageUri: '/static/illustratorObjFooter.png',
    title: '3.微生物基因组编辑，我们是专业的！',
    content: '针对您的微生物，我们来提供最适的CRISPR基因组编辑方案！'
  },
  {
    imageUri: '/static/illustratorObjFooter.png',
    title: '4.微生物基因组编辑，我们是专业的！',
    content: '针对您的微生物，我们来提供最适的CRISPR基因组编辑方案！'
  }
]

module.exports = {
  bannerImageList,
  lastedProduct,
  lastedServce,
  lastedNews,
  footerBanner
}