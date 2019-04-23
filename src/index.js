import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import Routes from './routes'
import 'sanitize.css/sanitize.css'
import './index.css'
import Modal from './components/commons/modal/modal'
const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Routes />
        <Modal />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
