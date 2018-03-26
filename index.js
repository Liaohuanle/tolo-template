const express = require('express')
const routerList = require('./router.js')
const app = express()
app.use( '/', express.static(__dirname + '/views'))
app.set('view engine', 'ejs')

routerList.forEach(item => {
  app.get(item.path, function(req, res) {
    res.render('./component/layout/index', item)
  })
})

app.listen(6200, () => console.info('welcome to success!'))