import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

const SecureRoute = props => {
  const { path, component } = props
  const isAuthed = useSelector(state => state.user.isAuthed)
  return isAuthed
    ? (
    <Route path={path} component={component} />
      )
    : (
    <Redirect to="/" />
      )
}

SecureRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.elementType,
}

export default SecureRoute
