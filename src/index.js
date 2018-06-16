// Main js entry point file

// Main JS
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap'

// Main CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// App Js
import App from 'components/app'
import appReducer from 'reducers/app'

const store = createStore(appReducer)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
