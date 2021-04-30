import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
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

import { SignInContainer } from './styles'
import { EVENT_MAP_PAGE_PATH } from '../../../constants/paths'

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
  const [email, setEmail] = useState('matvei@gmail.com')
  const [password, setPassword] = useState('123123')
  const dispatch = useDispatch()
  const errorCode = useSelector(state => state.error.errorCode)
  const errorMessage = useSelector(state => state.error.errorMessage)
  const isAuthed = useSelector(state => state.user.isAuthed)
  const handlerSignInByEmailAndPassword = () => {
    dispatch(signInEmailRequest(email, password))
  }
  const handlerSignInByGoogle = () => {
    dispatch(signInGoogleRequest())
  }

  return !isAuthed
    ? (
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
                  onClick={handlerSignInByEmailAndPassword}
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
                  onClick={handlerSignInByGoogle}
                >
                  Sign In by Google
                </Button>
              </form>
            </div>
          </Container>
        </SignInContainer>
      )
    : (<Redirect to={EVENT_MAP_PAGE_PATH}/>)
}

export default SignIn
