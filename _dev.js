const path = require('path');

const fs = require('fs')

const config = require('./_config')

const cp = require('child_process');

const chokidar = require('chokidar');

const watcher = chokidar.watch(path.join(__dirname, './views'));

let appIns = cp.fork(path.join(__dirname, './index.js'));

let lessFile = ''

readFile()

watcher.on('ready', () => {

      watcher.on('change', (path) => {
        
            console.log('** change: watched file change, do something');

            compileLess(path)

            appIns = reload(appIns);

      });

      watcher.on('add', (path) => {

            // writeLess(path)
            console.log('** add: watched new file add, do something');

            appIns = reload(appIns);

      });

      watcher.on('unlink', (path) => {

            // path = path.split('tolo/')[1]

            // lessFile = lessFile.replace(`./${path}`, '')

            // fs.writeFile(config.less.from, lessFile)

            console.log('** remove: watched file remove, do something');

            appIns = reload(appIns);

      });

});

process.on('SIGINT', () => {

      process.exit(0);

});

function readFile(){
      const src = config.less.from
      fs.readFile(src, (err, data) => {
            lessFile = data
      })
}

function writeLess(p){
      const isLess = /.less$/.test(p)
      p = p.split('tolo/')[1]
      lessFile = `${lessFile} @import './${p}';`
      fs.writeFile(config.less.from, lessFile)
}

function compileLess(path){
  const isMainLessFile = /main.less/.test(path)
  const temp =  path.split('/main.less')[0]
  const dest = `${temp}/css.ejs`
  if(isMainLessFile && dest){
    console.info('lessc compile => ', path, dest)
    cp.exec(`lessc -clean-css ${path} ${dest}`)
  }else{
    console.log(`***********error**************       =>   `, path, dest)
  }
}

function reload(appIns) {

      appIns.kill('SIGINT');

      return cp.fork(require('path').join(__dirname, './index.js'));

}
