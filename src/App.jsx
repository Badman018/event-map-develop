import React from 'react'
import { Provider } from 'react-redux'

import { store } from './reducers/store'
import Router from './components/wrappers/Router'

import './App.css'

const App = props => {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  )
}

export default App
