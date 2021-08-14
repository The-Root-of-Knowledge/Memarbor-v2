import React, { Component } from 'react';
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
      </div>
    );
  }
}

export default App;
