// This file is not used but is left here for reference to old code

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  modeButtonContainer: {
    margin: 40,
  },
  modeButton: {
    margin: 10,
  },
});

export default function ModeSelect(props) {
  const classes = useStyles();

  return(
    <div id="modeButtonContainer" className={classes.modeButtonContainer}>
      <Button className={classes.modeButton} onClick={() => props.changeMode('practice')} color="primary" variant="contained" size="large">Practice Mode</Button>
      <Button className={classes.modeButton} onClick={() => props.changeMode('create')} color="primary" variant="contained" size="large">Create Mode</Button>
      <Button className={classes.modeButton} onClick={() => props.changeMode('login')} color="secondary" variant="contained" size="large">Log in</Button>
      <Button className={classes.modeButton} onClick={() => props.changeMode('signup')} color="secondary" variant="contained" size="large">Sign up</Button>
    </div>
  )
}
