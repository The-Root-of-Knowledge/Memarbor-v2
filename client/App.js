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
      mode: null,
      loggedIn: null,
      username: '',
    };

    this.changeMode = this.changeMode.bind(this);
    this.logInUser = this.logInUser.bind(this);
  }

  changeMode (mode) {
    this.state.mode = mode;
    this.setState(this.state);
  }

  createNewUser (credentials) {
    console.log(credentials);
  }

  logInUser (credentials) {
    console.log(credentials);
    // Make a post request to the server and attempt to log in

    // Update this.state.loggedIn and this.state.username if login was successful

  }

  modeDisplay () {
    if (this.state.mode === 'practice') return <Practice />;
    else if (this.state.mode === 'create') return <Create />;
    else if (this.state.mode === 'login') return <LogIn logInUser={this.logInUser}/>;
    else if (this.state.mode === 'signup') return <SignUp />;
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
