import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Main from '../pages/Main'
import SignIn from '../pages/SignIn'

import SecureRoute from './SecureRoute'

const Router = () => {
  return (
  <BrowserRouter>
    <Switch>
        <SecureRoute path="/main" component={ () => <Main/>} />
        <Route exact path="/" component={() => <SignIn />} />
    </Switch>
  </BrowserRouter>
  )
}

export default Router
