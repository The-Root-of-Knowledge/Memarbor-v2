import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  answerCard: {
    minWidth: 300,
    maxWidth: 600,
    margin: 50,
  },
});

export default function AnswerCard(props) {
  const classes = useStyles();
  const result = (props.correct) ? '#98eb8f' : '#f27c7c';

  return (
    <Card className={classes.answerCard} style={{backgroundColor: result}}>
      <CardContent>
        <Typography className={classes.answer}>
          The answer is... {props.currCard.answer}!
        </Typography>
        <Typography>
          {(props.correct) ? 'You got it!' : 'Remember this one!'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" variant="contained" color="primary" onClick={() => props.getNewCard()}>Next Card</Button>
      </CardActions>
    </Card>
  );
}
