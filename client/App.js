import React, { Component } from "react";
import HomePage from "./containers/HomePage.jsx";
import Create from "./containers/Create.jsx";
import Practice from "./containers/Practice.jsx";
import LogIn from "./components/LogIn.jsx";
import SignUp from "./components/SignUp.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./material-ui/theme.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
      signUpResponse: null,
      username: "",
      userId: null,
    };

    this.logInUser = this.logInUser.bind(this);
    this.createNewUser = this.createNewUser.bind(this);
  }

  // checkCredentials(credentials) {
  //   //Check if login credentials are a mininumum of 8 characters
  //   let signUpResponse;
  //   if (credentials[0].length < 8) {
  //     signUpResponse = "Username must atleast be 8 characters long";
  //   }
  //   if (credentials[1].length < 8) {
  //     signUpResponse = "Password must be 8 characters long";
  //   }
  //   if (credentials[0].length < 8 && credentials[1].length < 8) {
  //     signUpResponse =
  //       "Username and password must each be atleast be 8 characters long";
  //   }

  //   if (
  //     signUpResponse === "Username must atleast be 8 characters long" ||
  //     "Password must be 8 characters long" ||
  //     "Username and password must each be atleast be 8 characters long"
  //   ) {
  //     this.setState({
  //       ...this.state,
  //       signUpResponse,
  //     });
  //     return;
  //   }
  // }

  createNewUser(credentials) {
    //Check if login credentials are a mininumum of 8 characters
    let signUpResponse;
    if (credentials[0].length < 1) {
      signUpResponse = "Username must atleast be 1 characters long";
    }
    if (credentials[1].length < 8) {
      signUpResponse = "Password must be 8 characters long";
    }
    if (credentials[0].length < 1 && credentials[1].length < 8) {
      signUpResponse =
        "Username must be at least 1 character long, and password must be at least 8 characters long";
    }

    if (signUpResponse) {
      this.setState({
        ...this.state,
        signUpResponse,
      });
      return;
    }

    console.log("fetch request initiated");
    // Make a post request to the server and attempt to sign up
    fetch("/auth/signup", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        username: credentials[0],
        password: credentials[1],
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // Update this.state.loggedIn and this.state.username based on response status
        let loggedIn = this.state.loggedIn;
        let username = this.state.username;
        let userId = this.state.userId;
        if (res.userId) {
          username = credentials[0];
          loggedIn = true;
          userId = res.userId;
          signUpResponse = "You successfully signed up!";
        }
        this.setState({
          ...this.state,
          username,
          loggedIn,
          userId,
          signUpResponse,
        });
      })
      .catch((err) => console.log(err));
  }

  logInUser(credentials) {
    // Make a post request to the server and attempt to log in
    fetch("/auth/login", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        username: credentials[0],
        password: credentials[1],
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // Update this.state.loggedIn and this.state.username based on response status
        let loggedIn = this.state.loggedIn;
        let username = this.state.username;
        let userId = this.state.userId;
        if (res.userId) {
          username = credentials[0];
          loggedIn = true;
          userId = res.userId;
        }
        this.setState({
          ...this.state,
          username,
          loggedIn,
          userId,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Router>
        <Navigation loggedIn={this.state.loggedIn} />
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" render={(props) => <HomePage />} />
            <Route
              path="/practice"
              render={(props) => <Practice loggedIn={this.state.loggedIn} />}
            />
            <Route
              path="/create"
              render={(props) => <Create userId={this.state.userId} />}
            />
            <Route
              path="/login"
              render={(props) => (
                <LogIn
                  logInUser={this.logInUser}
                  loggedIn={this.state.loggedIn}
                />
              )}
            />
            <Route
              path="/signup"
              render={(props) => (
                <SignUp
                  createNewUser={this.createNewUser}
                  loggedIn={this.state.loggedIn}
                  signUpResponse={this.state.signUpResponse}
                />
              )}
            />
          </Switch>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
