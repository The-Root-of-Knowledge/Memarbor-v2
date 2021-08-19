import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  flashcard: {
    minWidth: 300,
    maxWidth: 600,
    height: 500,
    margin: 50,
  },
  title: {
    fontSize: 20,
  },
  treePic: {
    height: "70%",
    width: "70%",
    objectFit: "cover",
  },
});

export default function FlashCard(props) {
  const classes = useStyles();

  const pressEnterHandler = (e) => {if (e.key === 'Enter') props.checkAnswer();}

  return (
    <Card className={classes.flashcard}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textPrimary"
          gutterbottom="true"
        >
          {props.currCard.question}
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.treePic}
        image={props.currCard.imageurl}
        title="Guess this tree!"
        gutterbottom="true"
        style={{alignSelf: 'center', justifySelf: 'center'}}
      />
      <CardActions>
        <TextField
          id="guess"
          variant="outlined"
          onKeyDown={pressEnterHandler}
          style={{ display: props.currCard.answer ? "block" : "none" }}
        />
        <Button
          size="medium"
          variant="contained"
          color="primary"
          onClick={() => props.checkAnswer()}
          style={{ display: props.currCard.answer ? "block" : "none" }}
        >
          Check my answer
        </Button>
      </CardActions>
    </Card>
  );
}
