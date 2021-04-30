import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

import { LinearProgress } from '@material-ui/core'
import firebase from '@/utils/firebase'
import { SIGN_IN_PAGE_PATH } from '@/constants/paths'

const SecureRoute = props => {
  const [authentication, setAuthState] = useState({
    authenticated: false,
    initialized: false,
  })

  useEffect(() => {
    setAuthState({
      initialized: false,
      authenticated: false,
    })
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      if (user) {
        setAuthState({
          initialized: true,
          authenticated: true,
        })
      } else {
        setAuthState({
          initialized: true,
          authenticated: false,
        })
      }
    })
    return () => unsubscribe
  }, [])

  if (!authentication.initialized) {
    return <LinearProgress/>
  }
  if (authentication.authenticated) {
    return <Route {...props} />
  }
  return <Redirect to={SIGN_IN_PAGE_PATH}/>
}

SecureRoute.propTypes = {
  component: PropTypes.elementType,
  path: PropTypes.string,
}

export default SecureRoute
