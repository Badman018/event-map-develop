import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import firebase from '@/utils/firebase'

import Preloader from './../common/Preloader/Preloader'

const SecureRoute = ({ component: Component, ...rest }) => {
  const [userProfile, setUserProfile] = useState(null)
  const [isLoaded, setIsLoaded] = useState(true)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        setUserProfile(user)
        setIsLoaded(false)
      } else {
        setIsLoaded(true)
      }
    })
    return () => {
      unsubscribe()
    }
  })

  return (
    <Route
      {...rest}
      render={
        props => {
          if (isLoaded) {
            return <Preloader/>
          }
          if (userProfile) {
            return <Component {...props} />
          }
          return <Redirect to="/"/>
        }
      }
    />
  )
}

SecureRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.elementType,
}

export default SecureRoute
