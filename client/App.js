import React, { Component } from 'react';
import HomePage from './containers/HomePage.jsx';
import Create from './containers/Create.jsx';
import Practice from './containers/Practice.jsx';
import LogIn from './components/LogIn.jsx';
import SignUp from './components/SignUp.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './material-ui/theme.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
      username: '',
    };

    this.logInUser = this.logInUser.bind(this);
    this.createNewUser = this.createNewUser.bind(this);
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

  render () {
    return (
      <Router>
          <Navigation loggedIn={this.state.loggedIn} />
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path='/' render={props => (
                <HomePage />
              )}/>
              <Route path='/practice' render={props => (
                  <Practice loggedIn={this.state.loggedIn} />
              )}/>
              <Route path='/create' component={Create}/>
              <Route path='/login' render={props => (
                  <LogIn logInUser={this.logInUser} loggedIn={this.state.loggedIn} />
              )}/>
              <Route path='/signup' render={props => (
                <SignUp createNewUser={this.createNewUser} loggedIn={this.state.loggedIn} />
              )}/>
            </Switch>
          </ThemeProvider>
      </Router>
    );
  }
}

export default App;
