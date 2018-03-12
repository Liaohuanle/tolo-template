const layoutModel = {
  common: `layout/common`
}


const generateView = (path, title, layoutType, view, data) => {
  return {
    path,
    view: layoutModel[ layoutType || 'common'],
    params: {
      viewUrl: `../${view}/index`,
      data,
      title
    }
  }
}

module.exports = [
  generateView(`/`, `首页`, 'common', 'home', {})
]