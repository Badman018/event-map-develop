import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router'

import firebase from '@/utils/firebase'

const SecureRoute = props => {
	const { path, component } = props
	const [currentUser, setCurrentUser] = useState(null)
	const [pending, setPending] = useState(true)

	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			setCurrentUser(user)
			setPending(false)
		})
	}, [])

	if (pending) {
		return <>Loading...</>
	}

	return currentUser ? <Route path={path} component={component} /> : <Redirect to="/" />
}

SecureRoute.propTypes = {
	path: PropTypes.string,
	component: PropTypes.elementType,
}

export default SecureRoute
