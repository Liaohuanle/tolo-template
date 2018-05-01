
const bannerText = '恭喜植生所合成生物学实验室赵国屏院士课题组发表最新研究论文'

const moment = require('moment')

const newsList = new Array(Math.ceil(Math.random(10)*40)).fill({
  date: moment().format('DD/MM/YYYY'),
  title: '公司员工青海湖度假',
  description: '在旅游过程中大家欢声笑语，持续不断，发挥洪荒之力互相帮助，克服高原反应，一起谈人生聊理想，气氛融洽到爆。',
  src: '/static/news-card.png',
  link: '',
})

const filterList = [
  {
    title: '公司动态',
    key: 'default'
  },{
    title: '科技导向',
    key: 'default'
  },{
    title: '行业风向 ',
    key: 'default'
  }
]

module.exports = {
  bannerText,
  newsList,
  filterList
}