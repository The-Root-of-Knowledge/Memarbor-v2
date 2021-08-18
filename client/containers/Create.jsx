import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CreateSet from '../components/CreateSet.jsx';
import CreateCard from '../components/CreateCard.jsx';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newSetMode: false,
      newCardMode: false,
      currSet: null,
      currSetId: null,
      isSetPrivate: '0',
      availableSets: [],
    };

    this.submitNewSet = this.submitNewSet.bind(this);
    this.submitNewCard = this.submitNewCard.bind(this);
    this.loadSet = this.loadSet.bind(this);
    this.toggleIsSetPrivate = this.toggleIsSetPrivate.bind(this);
  }
  getListOfSets() {
    fetch('/cards/getAllSets')
    .then((data) => data.json())
    .then((jvsdata) => {
      //console.log(jvsdata, "jvsdata in getListOfSets")
      this.setState({ availableSets: jvsdata })
    })
  }
  componentDidMount () {
    // Make a server request to get available set names and populate this.state.availableSets
    this.getListOfSets()
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
    for (let i = 0; i < this.state.availableSets.length; i++) {
      if (this.state.availableSets[i].setname === event.target.value) {
        this.state.currSetId = this.state.availableSets[i]._id;
        break;
      }
    }
    this.setState(this.state);
    console.log(this.state);
  }

  toggleIsSetPrivate () {
    const isSetPrivate = this.state.isSetPrivate === '1' ? '0' : '1';
    const newState = {
      ...this.state,
      isSetPrivate
    };
    this.setState(newState);
  }

  submitNewSet (newSetName) {
    // Make a request to the server with the new set's name
    let returnedSetId = null;
    fetch('/cards/createSet', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({
          name: newSetName, 
          private: this.state.isSetPrivate
        })
    })
    .then((dbdata) => dbdata.json())
    .then((jvsdata) => {
        //console.log(jvsdata, 'jvsdata in newSetName')
        returnedSetId = jvsdata
        this.state.currSetId = returnedSetId._id;
    })
    // If there are no errors, update the state with the new set as currSet and switch to newCardMode
    this.state.currSet = newSetName;
    
    this.enterNewCardMode();
  }

  submitNewCard (newCard) {
    // Make a request to the server with the new card's info. Maybe let the user know if there was an issue.
    //console.log(newCard, "Making new card");
    //console.log(this.state.currSetId, "the current set ID")
    fetch('/cards/createCard', {
        headers: {'Content-Type' : 'application/json'},
        method: 'POST',
        body: JSON.stringify({ question: newCard.question, imageurl: newCard.imageURL, answer: newCard.answer, set_id: this.state.currSetId })
    })
    
    
    //console.log('New card: ', newCard, ' in set: ', this.state.currSet);
  }

  render () {
    const containerStyle = {
      margin: '40px',
    };
    const buttonStyle = {
      margin: '10px',
    };

    let inputArea;
    if (this.state.newCardMode) {
      inputArea = <CreateCard key="newCard" submitNewCard={this.submitNewCard} availableSets={this.state.availableSets} loadSet={this.loadSet} currSet={this.state.currSet} />;
    } else if (this.state.newSetMode) {
      inputArea = <CreateSet key="newSet" toggleIsSetPrivate={this.toggleIsSetPrivate} submitNewSet={this.submitNewSet} />;
    } else {
      inputArea = <div></div>;
    }
    
    return (
      <div style={containerStyle}>
        <Button style={buttonStyle} size="large" variant="contained" color="primary" onClick={() => this.enterNewCardMode()}>Add card to existing set</Button>
        <Button style={buttonStyle} size="large" variant="contained" color="secondary" onClick={() => this.enterNewSetMode()}>Create new set of cards</Button>
        <hr></hr>
        {inputArea}
      </div>
    )
  }
}

export default Create;
