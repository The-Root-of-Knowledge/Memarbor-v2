import React from 'react';
import SetMenu from './SetMenu.jsx';
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

  const gatherCardInfo = () => {
    const newCard = {};
    newCard.question = document.getElementById('newCardQuestion').value;
    newCard.imageURL = document.getElementById('newCardImage').value;
    newCard.answer = document.getElementById('newCardAnswer').value;

    document.getElementById('newCardQuestion').value = '';
    document.getElementById('newCardImage').value = '';
    document.getElementById('newCardAnswer').value = '';

    return newCard;
  }

  return (
    <div>
      <SetMenu availableSets={props.availableSets} loadSet={props.loadSet} currSet={props.currSet} />
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
          <Button size="medium" variant="contained" color="primary" onClick={() => props.submitNewCard(gatherCardInfo())}>Sumbit new card</Button>
        </CardActions>
      </Card>
    </div>
  )
}