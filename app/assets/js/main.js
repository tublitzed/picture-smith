import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducers from './reducers'

import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-root')
)
