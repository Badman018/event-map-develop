import React from 'react'

import Button from '@material-ui/core/Button'

import { signOutFirebase } from '@/utils/firebase'

const Main = () => {
  const handlerOnClickSignOut = () => {
    signOutFirebase()
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
