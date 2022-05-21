import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector(state => state.user.userProfile)
  const user = localStorage.getItem('uid')

  return (
    <Route
      {...rest}
      render={props => {
        const params = Object.keys(props.match.params)
        if (isAuth) return <Component {...props} />
        if (user) return <LinearProgress />
        if (params.length > 0) return <Redirect to="/404" />
        return <Redirect to="/signin" />
      }}
    />
  )
}

export default PrivateRoute
