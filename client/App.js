import React, { Component } from 'react';
import ModeSelect from './components/modeSelect';
import Create from './containers/create';
import Practice from './containers/practice';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: null
    };

    this.changeMode = this.changeMode.bind(this);
  }

  changeMode (mode) {
    this.state.mode = mode;
    this.setState(this.state);
  }

  modeDisplay () {
    if (this.state.mode === 'practice') return <Practice />;
    else if (this.state.mode === 'create') return <Create />;
    else return <div />;
  }

  render () {
    return (
      <div>
        <h2>Hello from the react app</h2>
        <ModeSelect changeMode={this.changeMode} />
        <hr></hr>
        {this.modeDisplay()}
      </div>
    );
  }
}

export default App;
