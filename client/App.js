import React, { Component } from 'react';
import ModeSelect from './components/modeSelect';
import Create from './containers/create';
import Practice from './containers/practice';
<<<<<<< HEAD
import Selectsetlist from './containers/selectSetList.js';
=======
import LogIn from './components/login';
import SignUp from './components/signup';
>>>>>>> dev

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
<<<<<<< HEAD
      <div id="mainpage">
        
        <Practice id="practice"/>
        <Selectsetlist id="selectsetlist"/>
=======
      <div>
        <h2>Hello from the react app</h2>
        <ModeSelect changeMode={this.changeMode} />
        <hr></hr>
        {this.modeDisplay()}
>>>>>>> dev
      </div>
    );
  }
}

export default App;
