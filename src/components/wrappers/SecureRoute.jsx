import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router'

import firebase from '@/utils/firebase'

const SecureRoute = props => {
  const { path, component } = props
  const [authUser, setAuthUser] = useState(null)
  useEffect(() => {
    const unlisten = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      unlisten()
    }
  })

  return authUser ? <Route path={path} component={component} /> : null
}

SecureRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.elementType,
}

export default SecureRoute
