import React, { Component } from 'react';
import FlashCard from '../components/FlashCard.jsx';
import AnswerCard from '../components/AnswerCard.jsx';
import SelectSetList from './SelectSetList.jsx';

class Practice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currSet: [],
      currCard: {
        question: 'Please select a set of flashcards to start.',
        imageurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Larix_decidua_Aletschwald.jpg/1920px-Larix_decidua_Aletschwald.jpg',
      },
      correct: null,
    };

    this.checkAnswer = this.checkAnswer.bind(this);
    this.getNewCard = this.getNewCard.bind(this);
    this.getOneSet = this.getOneSet.bind(this);
  }

  checkAnswer = () => {
    const guess = document.getElementById('guess').value;
    document.getElementById('guess').value = '';
    if (guess.toLowerCase() === this.state.currCard.answer.toLowerCase()) {
      this.state.correct = true;
      return this.setState(this.state);
    } else {
      this.state.correct = false;
      return this.setState(this.state);
    }
  }

  getNewCard = () => {
    // Update this.state.currCard to a new card and this.state.correct to null
    this.state.correct = null;
    const randomIndex = Math.floor(Math.random()*this.state.currSet.length);
    this.state.currCard = this.state.currSet[randomIndex];
    this.setState(this.state);
  }

  getOneSet = (id) => {
    
    fetch(`/cards/getSet/`, {
      headers: {'Content-Type' : 'application/json'},
      method: 'POST',
      body: JSON.stringify({ _id : id })
    })
    .then((data) => data.json())
    .then((jvsdata) => {
      if (jvsdata.length > 0) {
        const randomIndex = Math.floor(Math.random()*jvsdata.length);
        this.setState({currSet: jvsdata, currCard: jvsdata[randomIndex]});
      } else {
        this.setState({currCard: {question: 'Sorry, that set does not have cards.'}});
      }
    })
  }

  renderAnswer = () => {
    if (this.state.correct === null) {
      return (<div></div>);
    } else {
      return (
        <AnswerCard 
          key={`answer`}
          correct={this.state.correct}
          currCard={this.state.currCard}
          getNewCard={this.getNewCard}
        />
      );
    }
  }

  render () {
    const dispAnswer = this.renderAnswer();

    return (
      <div id="mainpage">
        <div>
          <FlashCard 
            key={`card`}
            currCard={this.state.currCard}
            checkAnswer={this.checkAnswer}
          />
          {dispAnswer}
        </div>
        <div>
          <SelectSetList getOneSet={this.getOneSet} />          
        </div>
      </div>
    );
  }
}

export default Practice;
