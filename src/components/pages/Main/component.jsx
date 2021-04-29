import React from 'react'

import Button from '@material-ui/core/Button'

import { useDispatch } from 'react-redux'
import { signOutAuth } from '../../../actions'

const Main = () => {
  const dispatch = useDispatch()
  const handlerOnClickSignOut = () => {
    dispatch(signOutAuth())
  }
  return (
  <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    onClick={handlerOnClickSignOut}
  >
    Sign Out
  </Button>
  )
}

export default Main
