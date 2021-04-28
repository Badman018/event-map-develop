import React from 'react'
import { Switch } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { EVENT_MAP_PAGE_PATH, SIGN_IN_PAGE_PATH } from '@/constants/paths'

import Main from '../pages/Main'
import SignIn from '../pages/SignIn'

import SecureRoute from './SecureRoute'

const RouterApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={SIGN_IN_PAGE_PATH} component={() => <SignIn />} />
        <SecureRoute path={EVENT_MAP_PAGE_PATH} component={Main} />
      </Switch>
    </Router>
  )
}

export default RouterApp
