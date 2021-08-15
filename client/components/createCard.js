import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  newCardTemplate: {
    minWidth: 300,
    maxWidth: 600,
  },
});

export default function CreateCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.newCardTemplate}>
      <CardContent>
        <Typography>
          Enter card question:
        </Typography>
      </CardContent>
      <CardActions>
        <TextField id="newCardQuestion" variant="outlined" />
      </CardActions>
      <CardContent>
        <Typography>
          Enter image URL:
        </Typography>
      </CardContent>
      <CardActions>
        <TextField id="newCardImage" variant="outlined" />
      </CardActions>
      <CardContent>
        <Typography>
          Enter card answer:
        </Typography>
      </CardContent>
      <CardActions>
        <TextField id="newCardAnswer" variant="outlined" />
      </CardActions>
      <CardActions>
        <Button size="medium" variant="contained" color="primary" onClick={() => console.log('Submitting a new card...')}>Sumbit new card</Button>
      </CardActions>
    </Card>
  )
}