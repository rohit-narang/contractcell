import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import 'sanitize.css/sanitize.css';
import './index.css';
import Routes from './routes';

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}> 
        <Routes />
    </ConnectedRouter>
  </Provider>,
  target
)
