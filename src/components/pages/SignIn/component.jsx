import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'

import { signInEmailRequest, signInGoogleRequest } from '@/actions'
import { EVENT_MAP_PAGE_PATH } from '@/constants/paths'

import { SignInContainer } from './styles'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}))

const SignIn = props => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const errorCode = useSelector(state => state.error.errorCode)
  const errorMessage = useSelector(state => state.error.errorMessage)
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)

  const handleSignInByEmailAndPassword = () => {
    dispatch(signInEmailRequest(email, password))
  }
  const handleSignInByGoogle = () => {
    dispatch(signInGoogleRequest())
  }

  useEffect(() => {
    if (isAuthenticated) {
      history.push(EVENT_MAP_PAGE_PATH)
    }
  })

  return (
    <SignInContainer>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Sign in</Typography>
          <form className={classes.form} noValidate onSubmit={e => e.preventDefault()}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              error={errorCode === 'auth/invalid-email' || false}
              helperText={errorCode === 'auth/invalid-email' && errorMessage}
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              error={errorCode === 'auth/wrong-password' || false}
              helperText={errorCode === 'auth/wrong-password' && errorMessage}
              onChange={event => setPassword(event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSignInByEmailAndPassword}
            >
              Sign In
            </Button>
            <p>or</p>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSignInByGoogle}
            >
              Sign In by Google
            </Button>
          </form>
        </div>
      </Container>
    </SignInContainer>
  )
}

export default SignIn
