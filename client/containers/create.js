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
      availableSets: [],
    };
  }

  componentDidMount () {
    
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

  render () {
    let inputArea;
    if (this.state.newCardMode) {
      inputArea = <CreateCard />;
    } else if (this.state.newSetMode) {
      inputArea = <CreateSet />;
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
