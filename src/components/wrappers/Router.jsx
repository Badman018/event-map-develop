import React from 'react'
import { Switch } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'

import { EVENT_MAP_PAGE_PATH, SIGN_IN_PAGE_PATH, NOT_FOUND_PAGE_PATH } from '@/core/constants/paths'

import Main from '../pages/Main'
import SignIn from '../pages/SignIn'
import NotFoundPage from '../pages/NotFound'

import SecureRoute from './SecureRoute'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={SIGN_IN_PAGE_PATH} component={SignIn} />
        <SecureRoute path={EVENT_MAP_PAGE_PATH} component={Main} />
        <SecureRoute path={'/profile'} component={Main}/>
        <Route path={NOT_FOUND_PAGE_PATH} component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
