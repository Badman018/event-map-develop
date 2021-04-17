import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useDispatch, useSelector } from 'react-redux'
import { signInByEmail, signInByGoogle } from '../../../actions'
import { Redirect } from 'react-router'

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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const SignIn = props => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const error = useSelector(state => state.error.error)
  const isAuthed = useSelector(state => state.user.isAuthed)

  const handleSignIn = () => {
    dispatch(signInByEmail({ email, password }))
  }
  const handleSignInGoogle = () => {
    dispatch(signInByGoogle())
  }
  return !isAuthed
    ? (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} noValidate>
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
						error={error.code === 'auth/invalid-email' || false}
						helperText={error.code === 'auth/invalid-email' && error.message}
						onChange={event => setEmail(event.target.value)}/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						error={error.code === 'auth/wrong-password' || false}
						helperText={error.code === 'auth/wrong-password' && error.message}
						onChange={event => setPassword(event.target.value)}/>
				</form>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
					onClick={handleSignIn}
				>
					Sign In
				</Button>
				<Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				className={classes.submit}
				onClick={handleSignInGoogle}
				>
					Sign In by Google
				</Button>
			</div>
		</Container>
      )
    : <Redirect to={'/main'}/>
}

export default SignIn
