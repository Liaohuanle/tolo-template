const express = require('express')
const routerList = require('./router.js')
const app = express()
app.use( '/assets/', express.static(__dirname + '/assets/'))
app.set('view engine', 'ejs')

routerList.forEach(item => {
  app.get(item.path, function(req, res) {
    res.render(item.view, item.params)
  })
})

app.listen(6200, () => console.info('welcome to success!'))