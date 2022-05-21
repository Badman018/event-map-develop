import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'

import { store } from './core/store/reducers/store'
import Router from './components/wrappers/Router'
import firebase from './core/utils/firebase'
import './App.css'
import { saveUserData } from './core/store/actions/user'

const App = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(saveUserData(user.uid))
      }
    })
  }, [])

  return (
    <Router/>
  )
}

export default App
