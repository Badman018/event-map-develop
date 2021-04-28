import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

import firebase from '@/utils/firebase'
import { SIGN_IN_PAGE_PATH } from '@/constants/paths'

import Preloader from './../common/Preloader/Preloader'

const SecureRoute = ({ component: Component, ...rest }) => {
  const [authentication, setAuthState] = useState({
    authenticated: false,
    initializing: true,
  })

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setAuthState({
          authenticated: true,
          initializing: false,
        })
      } else {
        setAuthState({
          authenticated: false,
          initializing: true,
        })
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <Route
      {...rest}
      render={
        props => {
          if (authentication.authenticated) {
            return <Component {...props} />
          }
          if (authentication.initializing) {
            return <Preloader/>
          }
          return <Redirect to={SIGN_IN_PAGE_PATH}/>
        }
      }
    />
  )
}

SecureRoute.propTypes = {
  component: PropTypes.oneOfType([Route.propTypes.component, PropTypes.object]),
}

export default SecureRoute
