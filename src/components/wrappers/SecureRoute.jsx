import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Route, useHistory } from 'react-router-dom'

import { LinearProgress } from '@material-ui/core'
import firebase from '@/utils/firebase'
import { SIGN_IN_PAGE_PATH } from '@/constants/paths'
import { EVENT_MAP_PAGE_PATH } from '../../constants/paths'

const SecureRoute = props => {
  const history = useHistory()
  const [authentication, setAuthState] = useState({
    authenticated: false,
    initialized: false,
  })

  useEffect(() => {
    setAuthState({
      authenticated: false,
      initialized: false,
    })
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setAuthState({
          authenticated: true,
          initialized: true,
        })
        history.push(EVENT_MAP_PAGE_PATH)
      } else {
        setAuthState({
          authenticated: false,
          initialized: true,
        })
        history.push(SIGN_IN_PAGE_PATH)
      }
    })
    return () => unsubscribe
  }, [])

  if (!authentication.initialized) {
    return (<LinearProgress />)
  }
  if (authentication.authenticated) {
    return (<Route {...props} />)
  }
  return (null)
}

SecureRoute.propTypes = {
  component: PropTypes.oneOfType([Route.propTypes.component, PropTypes.object]),
}

export default SecureRoute
