import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import theme from '../material-ui/theme';

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
        <ThemeProvider theme={theme}>
          <Button size="medium" variant="contained" color="primary" onClick={() => props.submitNewSet(document.getElementById('newSetName').value)}>Submit</Button>
        </ThemeProvider>
      </CardActions>
    </Card>
  )
}
