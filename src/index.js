import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './redux/configureStore'

import App from './components/App'

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)
