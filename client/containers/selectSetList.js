import React, { Component } from 'react';
import Selectset from '../components/selectSet.js';



class Selectsetlist extends Component {
    constructor(props){
      super(props);
      this.state = {
        setList: [],
      }
      this.getListOfSets = this.getListOfSets.bind(this);
      
    }

    getListOfSets() {
      fetch('/cards/getAllSets')
      .then((data) => data.json())
      .then((jvsdata) => {
        
        this.setState({ setList: jvsdata })
      })
    }

    componentDidMount() {
      this.getListOfSets(); 
    }

    
  
    render() {
      
        return (
            <div>
               {
               this.state.setList.map((setEl) => {
                return (
                  <Selectset 
                  key={setEl._id}  
                  set={setEl}
                  getListOfSets={this.getListOfSets}
                  getOneSet={this.props.getOneSet}
                  />
              )
               })
               }
            </div>
        )
    }
}

export default Selectsetlist;