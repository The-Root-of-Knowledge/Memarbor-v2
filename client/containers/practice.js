import React, { Component } from 'react';
import FlashCard from '../components/card';
import AnswerCard from '../components/answerCard';
import Selectsetlist from './selectSetList.js';

class Practice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currSet: [],
      currCard: {
        question: 'What tree is this?',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1024px-Binary_search_tree.svg.png',
        answer: 'binary search tree',
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
    console.log('Checking answer... ', guess);
    if (guess.toLowerCase() === this.state.currCard.answer.toLowerCase()) {
      this.state.correct = true;
      return this.setState(this.state);
    } else {
      this.state.correct = false;
      return this.setState(this.state);
    }
  }

  getNewCard = () => {
    console.log('Getting a new flash card by updating the state...');
    // Update this.state.currCard to a new card and this.state.correct to null
    this.state.correct = null;
    this.setState(this.state);
  }

  getOneSet = (id) => {
    console.log(id, "id in getOneSet")
    fetch(`/cards/getSet/${id}`)
    .then((data) => data.json())
    .then((jvsdata) => {
      console.log(jvsdata, "jvsdata in getOneSet")
      this.setState({currSet: jvsdata, currCard: jvsdata[0]})
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
          <Selectsetlist getOneSet={this.getOneSet} />          
        </div>
      </div>
    );
  }
}

export default Practice;
