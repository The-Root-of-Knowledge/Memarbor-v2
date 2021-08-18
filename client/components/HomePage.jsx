import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  mainPageContainer: {
    margin: 40,
  },
  routeButton: {
    margin: 10,
  },
});

export default function HomePage(props) {
  const classes = useStyles();

  return(
    <div id="mainPageContainer" className={classes.mainPageContainer}>
      <img src='https://i.imgur.com/OXJS8RA.jpg' alt='The Root Of Knowledge Icon'></img>
      <Button className={classes.routeButton} onClick={() => props.changeMode('login')} color="secondary" variant="contained" size="large">Log in</Button>
      <Button className={classes.routeButton} onClick={() => props.changeMode('signup')} color="secondary" variant="contained" size="large">Sign up</Button>
    </div>
  )
}