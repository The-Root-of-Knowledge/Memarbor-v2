import React, { Component } from 'react';
import ModeSelect from './components/modeSelect';
import Create from './containers/create';
import Practice from './containers/practice';
import LogIn from './components/login';
import SignUp from './components/signup';

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
    else if (this.state.mode === 'login') return <LogIn />;
    else if (this.state.mode === 'signup') return <SignUp />;
    else return <div />;
  }

  render () {
    return (
      <div>
        <h1>MemArbor</h1>
        <ModeSelect changeMode={this.changeMode} />
        <hr></hr>
        {this.modeDisplay()}
      </div>
    );
  }
}

export default App;
