import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Route, useHistory } from 'react-router-dom'
import firebase from '@/utils/firebase'

const SecureRoute = props => {
  const history = useHistory()
  const { path, component } = props
  const [authUser, setAuthUser] = useState(null)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setAuthUser(user)
        history.push(path)
      } else {
        setAuthUser(null)
        history.push('/')
      }
    })
  }, [])

  return authUser && <Route path={path} component={component} />
}

SecureRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.elementType,
}

export default SecureRoute
