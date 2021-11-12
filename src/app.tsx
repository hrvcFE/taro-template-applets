import { Provider } from 'react-redux'
import { Component } from 'react'

import './app.scss'
import store from './store'
class App extends Component {
  onLaunch () {
    // 解决 iOS 不支持 Promise.finally 的问题
    if (!Promise.prototype.finally) {
      // eslint-disable-next-line
      Promise.prototype.finally = function (onfinally?: (() => void)) {
        let P = this.constructor
        return this.then(
          value => P.resolve(onfinally?.()).then(() => value),
          reason => P.resolve(onfinally?.()).then(() => {throw reason })
        )
      }
    }
  }

  // props.children 是将要会渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}


export default App
