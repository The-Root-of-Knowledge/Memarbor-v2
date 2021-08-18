import React, { Component } from 'react';
import FlashCard from '../components/FlashCard.jsx';
import AnswerCard from '../components/AnswerCard.jsx';
import SelectSetList from './SelectSetList.jsx';
import CheckBox from '../components/CheckBox.jsx';

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
      showPrivateSets: false,
      showPublicSets: true,
      persistingSetList: [],
      setList: []
    };

    this.checkAnswer = this.checkAnswer.bind(this);
    this.getNewCard = this.getNewCard.bind(this);
    this.getOneSet = this.getOneSet.bind(this);
    this.toggleShowPrivateSets = this.toggleShowPrivateSets.bind(this);
    this.toggleShowPublicSets = this.toggleShowPublicSets.bind(this);
    this.getListOfSets = this.getListOfSets.bind(this);
    this.updateSetListDisplay = this.updateSetListDisplay.bind(this);
  }

  componentDidMount() {
    this.getListOfSets(); 
  }

  updateSetListDisplay() {
    const setArray = [];
    if (this.state.showPrivateSets) {
      for (const set of this.state.persistingSetList) {
        if (set.private === true) setArray.push(set);
      }
    }
    if (this.state.showPublicSets) {
      for (const set of this.state.persistingSetList) {
        if (set.private === false) setArray.push(set);
      }
    }
    this.setState({ setList: setArray });
  }

  getListOfSets() {
    fetch('/cards/getAllSets')
    .then((data) => data.json())
    .then((jvsdata) => {
      const setArray = [];
      if (this.state.showPrivateSets) {
        for (const set of jvsdata) {
          if (set.private === true) setArray.push(set);
        }
      }
      if (this.state.showPublicSets) {
        for (const set of jvsdata) {
          if (set.private === false) setArray.push(set);
        }
      }
      console.log('setList', setArray)
      console.log('persistingSetList', jvsdata)
      this.setState({
        ...this.state,
        setList: setArray, 
        persistingSetList: jvsdata 
      })
    })
  }

  toggleShowPrivateSets () {
    const showPrivateSets = this.state.showPrivateSets === true ? false : true;
    const newState = {
      ...this.state,
      showPrivateSets
    };
    this.setState(newState);
  }

  toggleShowPublicSets () {
    const showPublicSets = this.state.showPublicSets === true ? false : true;
    const newState = {
      ...this.state,
      showPublicSets
    };
    this.setState(newState);
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
          { this.props.loggedIn && 
            <div>
              <CheckBox
                checkPrompt= "Show private sets" 
                onClickFunction={this.toggleShowPrivateSets}
              />
              <CheckBox
                checkPrompt= "Show public sets" 
                onClickFunction={this.toggleShowPublicSets}
              />
            </div>
          }
          { !this.props.loggedIn && 
            <div>
              Showing Public Sets
            </div>
          }
          <SelectSetList
            getOneSet={this.getOneSet}
            // getListOfSets={this.getListOfSets}
            setList={this.state.setList}
            showPrivateSets={this.state.showPrivateSets}
            showPublicSets={this.state.showPublicSets}
          />          
        </div>
      </div>
    );
  }
}

export default Practice;
