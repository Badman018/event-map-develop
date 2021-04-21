import React from 'react'
import { store } from './reducers/store'
import { Provider } from 'react-redux'

import './App.css'
import Router from './components/wrappers/Router'

const App = props => {
  return (
  <Provider store={store}>
      <Router/>
  </Provider>)
}

export default App
