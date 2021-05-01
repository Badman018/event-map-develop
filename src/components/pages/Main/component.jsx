import React from 'react'
import { useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'
import { signOutAuth } from '@/actions'

const Main = () => {
  const dispatch = useDispatch()
  const handleOnClickSignOut = () => {
    dispatch(signOutAuth())
  }
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      onClick={handleOnClickSignOut}
    >
      Sign Out
    </Button>
  )
}

export default Main
