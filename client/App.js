import React, { Component } from 'react';
import Create from './containers/create';
import Practice from './containers/practice';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h2>Hello from the react app</h2>
        <Practice />
        <Create />
      </div>
    );
  }
}

export default App;
