import React, { Component } from 'react';
import ModeSelect from './components/ModeSelect.jsx';
import Create from './containers/Create.jsx';
import Practice from './containers/Practice.jsx';
import LogIn from './components/LogIn.jsx';
import SignUp from './components/SignUp.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';

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
    this.createNewUser = this.createNewUser.bind(this);
  }

  changeMode (mode) {
    this.state.mode = mode;
    this.setState(this.state);
  }

  createNewUser (credentials) {
    // Make a post request to the server and attempt to sign up
    fetch('/auth/signup', {
      headers: { 'Content-Type' : 'application/json' },
      method: "POST",
      body: JSON.stringify({username: credentials[0], password: credentials[1]}),
    })
    .then(res => {
      // Update this.state.loggedIn and this.state.username based on response status
      if (res.status === 200) {
        this.state.username = credentials[0];
        this.state.loggedIn = true;
      } else {
        this.state.username = '';
        this.state.loggedIn = false;
      }
      this.setState(this.state);
    })
    .catch(err => console.log(err));
  }

  logInUser (credentials) {
    // Make a post request to the server and attempt to log in
    fetch('/auth/login', {
      headers: { 'Content-Type' : 'application/json' },
      method: "POST",
      body: JSON.stringify({username: credentials[0], password: credentials[1]}),
    })
    .then(res => {
      // Update this.state.loggedIn and this.state.username based on response status
      if (res.status === 200) {
        this.state.username = credentials[0];
        this.state.loggedIn = true;
      } else {
        this.state.username = '';
        this.state.loggedIn = false;
      }
      this.setState(this.state);
    })
    .catch(err => console.log(err));
  }

  modeDisplay () {
    if (this.state.mode === 'practice') return <Practice />;
    else if (this.state.mode === 'create') return <Create />;
    else if (this.state.mode === 'login') return <LogIn logInUser={this.logInUser} loggedIn={this.state.loggedIn} />;
    else if (this.state.mode === 'signup') return <SignUp createNewUser={this.createNewUser} loggedIn={this.state.loggedIn} />;
    else return <div />;
  }

  render () {
    return (
      <div>
        <ModeSelect changeMode={this.changeMode} />
        <hr></hr>
        {this.modeDisplay()}
      </div>
    //   <Router>
    //   <Navigation />
    //     <Switch>
    //       <Route path='/' render={props => (
    //         <div>
    //           <ModeSelect changeMode={this.changeMode} />
    //           <hr></hr>
    //         </div>
    //       )}/>
    //       <Route path='/practice' component={Practice}/>
    //       <Route path='/create' component={Create}/>
    //       <Route path='/login' render={props => (
    //         <LogIn logInUser={this.logInUser} loggedIn={this.state.loggedIn} />
    //       )}/>
    //       <Route path='/signup' render={props => (
    //         <SignUp createNewUser={this.createNewUser} loggedIn={this.state.loggedIn} />
    //       )}/>
    //     </Switch>
    // </Router>
    );
  }
}

export default App;
