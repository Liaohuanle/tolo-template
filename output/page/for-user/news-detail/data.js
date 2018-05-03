const moment = require('moment');

const bannerText = '恭喜植生所合成生物学实验室赵国屏院士课题组发表最新研究论文';

const newsList = new Array(3).fill({
  date: moment().format('DD/MM/YYYY'),
  title: '公司员工青海湖度假',
  description: '在旅游过程中大家欢声笑语，持续不断，发挥洪荒之力互相帮助，克服高原反应，一起谈人生聊理想，气氛融洽到爆。',
  src: '/static/news-card.png',
  link: ''
});

const breadCrumbList = [{
  href: 'news',
  title: '资讯',
  isActive: false
}, {
  href: '科技导向',
  title: 'default',
  isActive: true
}];

const newsHeadInfo = {
  newsTitleImg: '/static/news-detaile-banner.png',
  newsDate: moment().format('YYYY/MM/DD'),
  title: '新加坡国立大学Dong-Yup Lee博士来我公司进行技术讲座'
};

const content = [`2016年3月6日，新加坡国立大学Dong-Yup Lee博士来我公司进行技术讲座。`, `Dong-Yup Lee是新加坡国立大学化学与生物工程系(Department of Chemical and Biomolecular Engineering,National University of Singapore)助理教授，同时受聘于Bioprocessing Technology Institute,Agency for Science and Technology Research，主要研究系统生物技术、生物信息学、合成生物学、药物与疾病建模与控制、健康/能源政策建模等领域，已在相关领域发表或共同发表90余篇文章。`, `这次来本公司进行的技术讲座的主题是系统与合成生物技术在微生物、植物和哺乳动物细胞功能分析与设计中的应用。通过基于多组学数据和假设模型的整合分析，建立基于知识的"系统与合成生物技术"平台，而该平台不仅可以用于研究不同条件下细胞的生长功能，也可以用于改良细胞的性状，甚至设计新的生物学产品和功能。`, `此次讲座Doc. Lee主要给我们各位同事介绍了该平台在微生物、植物和哺乳动物细胞的应用以及他们实验室所做的工作，同时提出了问题与挑战。各位同事积极参与，跟Doc. Lee进行了充分的英语学术交流。同时，Doc. Lee非常欢迎各位同事去Singapore学习和交流，让吐露港生物永远走在科研的最前端。`];

const pageNation = {
  prevPage: {
    text: '公司员工青海湖度假',
    href: '#'
  },
  pnextPage: {
    text: '俄罗斯喀什大学专家来我公司访问',
    href: '#'
  }
};

module.exports = {
  bannerText,
  newsList,
  breadCrumbList,
  newsHeadInfo,
  content,
  pageNation
};
