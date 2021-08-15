import React, { Component } from 'react';
import Practice from './containers/practice';
import Selectsetlist from './containers/selectSetList.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h2>Hello from the react app</h2>
        <Selectsetlist />
        <Practice />
        
      </div>
    );
  }
}

export default App;
