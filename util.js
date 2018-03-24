export const generateView = (path, title, layoutType, view, data) => {
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