
const bannerText = '吐露港生物面向科研工作者提供各类技术服务,科技下一代测序（Next Generation Sequencing）建库相关的试剂盒(illumina平台)，DNase I Footprinting assay和DNA/RNA EMSA等技术服务'

const productList = new Array(Math.ceil(Math.random(10)*40)).fill({
  term: Math.ceil(Math.random(10) * 100),
  title: 'DNA相关',
  price: Math.ceil(Math.random(10) * 1000),
  src: '/static/dna-footprint.png',
  desc: '微生物基因组编辑”领域率先推出团队专业,方法快速高效',
})

const filterList = [
  {
    title: '全部',
    key: 'default'
  },{
    title: 'DNA相关',
    key: 'default'
  },{
    title: 'RNA相关',
    key: 'default'
  },{
    title: '蛋白质相关',
    key: 'default'
  },{
    title: '下一代测序',
    key: 'default'
  },{
    title: '基因合成',
    key: 'default'
  }
]

module.exports = {
  bannerText,
  productList,
  filterList
}