import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CreateSet from '../components/createSet';
import CreateCard from '../components/createCard';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newSetMode: false,
      newCardMode: false,
      currSet: null,
      availableSets: ['trees', 'birds', 'drag queens'],
    };

    this.submitNewSet = this.submitNewSet.bind(this);
    this.submitNewCard = this.submitNewCard.bind(this);
    this.loadSet = this.loadSet.bind(this);
  }

  componentDidMount () {
    // Make a server request to get available set names and populate this.state.availableSets
  }

  enterNewSetMode () {
    this.state.newSetMode = true;
    this.state.newCardMode = false;
    this.setState(this.state);
  }

  enterNewCardMode () {
    this.state.newSetMode = false;
    this.state.newCardMode = true;
    this.setState(this.state);
  }

  loadSet (event) {
    // This should update the state's currSet to whichever set was selected
    this.state.currSet = event.target.value;
    this.setState(this.state);
  }

  submitNewSet (newSetName) {
    // Make a request to the server with the new set's name

    // If there are no errors, update the state with the new set as currSet and switch to newCardMode
    this.state.currSet = newSetName;
    this.enterNewCardMode();
  }

  submitNewCard (newCard) {
    // Make a request to the server with the new card's info. Maybe let the user know if there was an issue.
    console.log('New card: ', newCard, ' in set: ', this.state.currSet);
  }

  render () {
    let inputArea;
    if (this.state.newCardMode) {
      inputArea = <CreateCard key="newCard" submitNewCard={this.submitNewCard} availableSets={this.state.availableSets} loadSet={this.loadSet} currSet={this.state.currSet} />;
    } else if (this.state.newSetMode) {
      inputArea = <CreateSet key="newSet" submitNewSet={this.submitNewSet} />;
    } else {
      inputArea = <div></div>;
    }
    
    return (
      <div>
        <Button size="large" variant="contained" color="primary" onClick={() => this.enterNewCardMode()}>Add card to existing set</Button>
        <Button size="large" variant="contained" color="secondary" onClick={() => this.enterNewSetMode()}>Create new set of cards</Button>
        <hr></hr>
        {inputArea}
      </div>
    )
  }
}

export default Create;
