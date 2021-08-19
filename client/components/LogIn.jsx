import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  loginBox: {
    margin: 40,
  },
  spacer: {
    margin: 10,
  },
});

export default function LogIn(props) {
  const classes = useStyles();

  const gatherCredentials = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    return [username, password];
  }

  const loginMessage = () => {
    if (props.loggedIn === true) return <p>Welcome back!</p>
    else if (props.loggedIn === false) return <p>There was an issue logging in to that account.</p>
    else return <div></div>
  }

  return (
    <div className={classes.loginBox}>
      <TextField id="username" className={classes.spacer} variant="outlined" label="Username"></TextField>
      <TextField id="password" className={classes.spacer} variant="outlined" label="Password" type="password"></TextField>
      <br></br>
      <Button className={classes.spacer} size="large" variant="contained" color="primary" onClick={() => props.logInUser(gatherCredentials())}>Log In</Button>
      {/* <Button className={classes.spacer} size="large" variant="contained" color="secondary" onClick={() => props.logInWithGoogle()}>Sign In With Google</Button> */}
      <a href="/auth/google">Sign In with Google</a>
      {loginMessage()}
    </div>
  )
}
