const path = require('path');

const buildRoot = '/output';

const buildFilterPath = ['_compile.js', '_dev.js', 'node_modules', '.babelrc', '.less'];
module.exports = {
  rootDir: path.join(__dirname + '/views/page'),
  less: {
    from: './assets/css/main.less',
    dest: './assets/css/main.css'
  },
  buildFilterPath,
  buildRoot
};
