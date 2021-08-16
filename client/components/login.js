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

  return (
    <div className={classes.loginBox}>
      <TextField id="username" className={classes.spacer} variant="outlined" label="Username"></TextField>
      <TextField id="password" className={classes.spacer} variant="outlined" label="Password" type="password"></TextField>
      <br></br>
      <Button className={classes.spacer} size="large" variant="contained" color="primary" onClick={() => props.logInUser(gatherCredentials())}>Log In</Button>
    </div>
  )
}
