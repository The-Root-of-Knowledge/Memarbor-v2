import React, { Component } from 'react';
import Practice from './containers/practice';
import List from './containers/list.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h2>Hello from the react app</h2>
        <List />
        <Practice />
        
      </div>
    );
  }
}

export default App;
