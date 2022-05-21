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
import PersonIcon from '@material-ui/icons/Person'
import { signOutAuth } from '@/core/store/actions'
import { removeMarkersData } from '../../../core/store/actions/events'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
}))

const Header = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const userEmail = useSelector(state => state.user.userProfile.email)
  const history = useHistory()

  const handlerClick = () => {
    dispatch(removeMarkersData())
    dispatch(signOutAuth())
    localStorage.clear()
  }

  const handleMapRouteChange = () => {
    history.push('/main')
  }

  const handleProfileChange = () => {
    history.push('/profile/')
  }

  return (
    <AppBar position="sticky">
      <Toolbar color="primary">
        <div className={classes.grow} />
            {userEmail}
        <div>
          <IconButton
            color="inherit"
            onClick={handleMapRouteChange}
          >
            <Badge color="secondary">
              <MapIcon />
            </Badge>
          </IconButton>
           <IconButton
            color="inherit"
            onClick={handleProfileChange}
           >
            <Badge color="secondary">
              <PersonIcon />
            </Badge>
           </IconButton>
          <IconButton
            color="inherit"
          >
            <Badge color="secondary">
              <SettingsIcon />
            </Badge>
          </IconButton>
          <IconButton
            color="inherit"
            onClick={handlerClick}
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
