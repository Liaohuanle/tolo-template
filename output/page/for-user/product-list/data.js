
const bannerText = '吐露港生物科技致力于科研和工业用酶的研发，已经开发成功的产品 PCR、克隆相关的载体和试剂。';

const productList = new Array(Math.ceil(Math.random(10) * 40)).fill({
  term: Math.ceil(Math.random(10) * 100),
  title: 'DNA相关',
  price: Math.ceil(Math.random(10) * 1000),
  src: '/static/dna-footprint.png',
  desc: '微生物基因组编辑”领域率先推出团队专业,方法快速高效'
});

const productTable = [{
  title: 'PRC系列',
  children: ['abc', 'efg']
}, {
  title: 'PRC系列',
  children: ['abc', 'efg']
}, {
  title: 'PRC系列',
  children: ['abc', 'efg']
}, {
  title: 'PRC系列',
  children: ['abc', 'efg']
}];

const filterList = [{
  val: 'like',
  checked: true,
  title: '想看'
}, {
  val: 'dislike',
  checked: false,
  title: '不想看'
}];

module.exports = {
  bannerText,
  productList,
  filterList,
  productTable
};
