import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

import firebase from '@/utils/firebase'
import { NOT_FOUND_PAGE_PATH } from '@/constants/paths'

import Preloader from '../common/Preloader/Preloader'

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
    return () => unsubscribe()
  }, [])

  if (!authentication.initialized) {
    return <Preloader/>
  }
  if (authentication.authenticated) {
    return <Route {...props} />
  }
  return <Redirect to={NOT_FOUND_PAGE_PATH}/>
}

SecureRoute.propTypes = {
  component: PropTypes.elementType,
  path: PropTypes.string,
}

export default SecureRoute
