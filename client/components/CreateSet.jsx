import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CheckBox from './CheckBox.jsx';

const useStyles = makeStyles({
  newSetTemplate: {
    minWidth: 300,
    maxWidth: 600
  },
  checkBoxPrompt: {
    paddingLeft: 0
  }
});

export default function CreateSet(props) {
  const classes = useStyles();

  return (
    <Card className={classes.newSetTemplate}>
      <CardContent>
        <Typography>
          Enter a new set name:
        </Typography>
      </CardContent>
      <CardActions>
        <TextField id="newSetName" variant="outlined" />
      </CardActions>
      <CardActions className={classes.checkBoxPrompt}>
        <CheckBox  
          checkPrompt = "Make set private? (Only you can use it to study)" 
          onClickFunction={props.toggleIsSetPrivate}
        />
      </CardActions>
      <CardActions>
        <Button 
          size="medium" 
          variant="contained" 
          color="primary" 
          onClick={() => props.submitNewSet(document.getElementById('newSetName').value)}
          >Submit
        </Button>
      </CardActions>
    </Card>
  )
}
