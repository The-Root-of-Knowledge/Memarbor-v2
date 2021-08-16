import React, { Component } from 'react';
import Practice from './containers/practice';
import Selectsetlist from './containers/selectSetList.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="mainpage">
        
        <Practice id="practice"/>
        <Selectsetlist id="selectsetlist"/>
      </div>
    );
  }
}

export default App;
