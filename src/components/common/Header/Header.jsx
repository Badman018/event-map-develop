import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MapIcon from '@material-ui/icons/Map'
import SettingsIcon from '@material-ui/icons/Settings'
import Badge from '@material-ui/core/Badge'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { makeStyles } from '@material-ui/core/styles'

import { signOutRequest } from '@/actions/user'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
}))

const Header = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const userEmail = useSelector(state => state.user.user.email.email)

  const handlerClick = () => {
    dispatch(signOutRequest())
  }

  return (
    <AppBar position="sticky">
      <Toolbar color="primary">
        <div className={classes.grow} />
            {userEmail}
        <div>
          <IconButton
            color="inherit"
            data-testid="mapBtn"
          >
            <Badge color="secondary">
              <MapIcon />
            </Badge>
          </IconButton>
          <IconButton
            color="inherit"
            data-testid="settingsBtn"
          >
            <Badge color="secondary">
              <SettingsIcon />
            </Badge>
          </IconButton>
          <IconButton
            color="inherit"
            onClick={handlerClick}
            data-testid="signOutBtn"
          >
            <Badge color="secondary">
              <ExitToAppIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
