function getVantComponents (list) {
  const VANT_PREFIX = 'van-'
  const VANT_PATH = component => `./components/vant-weapp/dist/${component}/index`
  return list.reduce((acc, item) => {
    acc[VANT_PREFIX + item] = VANT_PATH(item)
    return acc
  }, {})
}

const vantComponents = [
  'button',
  'notify',
  'icon',
  'loading',
  'nav-bar',
  'search',
  'tabs',
  'tab',
  'skeleton',
  'empty',
  'divider',
  'popup',
  'datetime-picker',
  'picker',
  'switch',
  'dialog',
  'toast'
]

export default {
  pages: [
    'pages/index/index'
  ],
  window: {
    // 下拉 loading 的样式
    backgroundTextStyle: 'light',
    enablePullDownRefresh: false,
    navigationStyle: 'custom'
  },
  usingComponents: getVantComponents(vantComponents)
}
