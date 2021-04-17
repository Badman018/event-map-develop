import './App.css'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import SignIn from './components/pages/SignIn'

const App = props => {
  return (
  <BrowserRouter>
    <Route exact path="/" component={() => <SignIn />} />
  </BrowserRouter>
  )
}

export default App
