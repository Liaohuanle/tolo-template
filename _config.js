const path = require('path');
module.exports = {
  rootDir: path.join(__dirname + '/views/page'),
  less: {
    from: './assets/css/main.less',
    dest: './assets/css/main.css'
  }
}