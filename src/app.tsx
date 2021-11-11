import { Provider } from 'react-redux'

import './app.scss'
import store from './store'

function App (props) {
  // props.children 是将要会渲染的页面
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}

export default App
