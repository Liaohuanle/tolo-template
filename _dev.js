const path = require('path');

const fs = require('fs')

const config = require('./_config')

const cp = require('child_process');

const chokidar = require('chokidar');

const watcher = chokidar.watch(path.join(__dirname, './views'));

let appIns = cp.fork(path.join(__dirname, './index.js'));

let lessFile = ''

let lessFileList = []

lessFileList = fetchAllFIleList(config.rootDir)

console.info(lessFileList)

watcher.on('ready', () => {

      watcher.on('change', (path) => {
        
            console.log('** change: watched file change, do something');

            compileLess(path)

            appIns = reload(appIns);

      });

      watcher.on('add', (path) => {

        console.log('** add: watched new file add, do something');
        lessFileList = fetchAllFIleList(config.rootDir)
        appIns = reload(appIns);

      });

      watcher.on('unlink', (path) => {

        // path = path.split('tolo/')[1]

        // lessFile = lessFile.replace(`./${path}`, '')

        // fs.writeFile(config.less.from, lessFile)

        console.log('** remove: watched file remove, do something');
        lessFileList = fetchAllFIleList(config.rootDir)
        appIns = reload(appIns);

      });

});

process.on('SIGINT', () => process.exit(0));

function compileLess(path){
  const isLessFile = /.less/.test(path)
  isLessFile && lessFileList && lessFileList.length && lessFileList.forEach(item => {
    const temp =  item.split('/main.less')[0]
    const dest = `${temp}/css.ejs`
    cp.exec(`lessc -clean-css ${item} ${dest}`)
    console.info('lessc compile => ', item, dest)
  })
}

function reload(appIns) {

  appIns.kill('SIGINT');

  return cp.fork(require('path').join(__dirname, './index.js'));

}

function fetchAllFIleList(root){
  const allFiles = fs.readdirSync(root)
  let res = []
  allFiles && allFiles.length && allFiles.forEach(item => {
    const stat = fs.lstatSync(path.join(root, '/',item))
    if (!stat.isDirectory()){
      /main.less/.test(item) && res.push(path.join(root,'/',item));
    } else {
      res = res.concat(fetchAllFIleList(path.join(root,'/',item)));
    }
  })
  return res
}