import React, { Component } from 'react';
import SetList from '../components/selectSet.js';


class List extends Component {
    constructor(props){
      super(props)
      this.state = {
        setList: [],
      }
      this.getListOfSets = this.getListOfSets.bind(this);
    }
  getListOfSets() {
    fetch('/getAllSets')
    .then((data) => data.json())
    .then((data) => this.setState({ setList: data }))
  }
    render() {

        return (
            <div>
               <SetList/> 
            </div>
        )
    }
}

export default List;