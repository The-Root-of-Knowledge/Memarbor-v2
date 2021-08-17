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

export default function SignUp(props) {
  const classes = useStyles();

  const gatherCredentials = () => {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    return [username, password];
  }

  const signupMessage = () => {
    if (props.loggedIn === true) return <p>Welcome! Let's make some flashcards!</p>
    else if (props.loggedIn === false) return <p>There was an issue creating your account.</p>
    else return <div></div>
  }

  return (
    <div className={classes.loginBox}>
      <TextField id="newUsername" className={classes.spacer} variant="outlined" label="Username"></TextField>
      <TextField id="newPassword" className={classes.spacer} variant="outlined" label="Password" type="password"></TextField>
      <br></br>
      <Button className={classes.spacer} size="large" variant="contained" color="primary" onClick={() => props.createNewUser(gatherCredentials())}>Create my account</Button>
      {signupMessage()}
    </div>
  )
}
