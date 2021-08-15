import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  newSetTemplate: {
    minWidth: 300,
    maxWidth: 600
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
        <Button size="medium" variant="contained" color="primary" onClick={() => console.log('Submitting new set name...')}>Submit</Button>
      </CardActions>
    </Card>
  )
}
