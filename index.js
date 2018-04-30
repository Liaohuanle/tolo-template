const express = require('express');
const routerList = require('./router.js');
const app = express();
const pageCommonData = require('./views/data/index');

app.use('/static', express.static(__dirname + '/views/assets'));
app.set('view engine', 'ejs');

routerList.forEach(item => {
  const data = Object.assign({}, item, pageCommonData);
  app.get(item.path, function (req, res) {
    res.render('./component/layout/index', data);
  });
});

app.listen(6200, () => console.info('welcome to success!'));
