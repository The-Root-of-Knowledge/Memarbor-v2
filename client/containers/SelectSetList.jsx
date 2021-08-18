import React, { Component } from 'react';
import SelectSet from '../components/SelectSet.jsx';

class SelectSetList extends Component {
    constructor(props){
      super(props);
      // this.state = {
      //   persistingSetList: [],
      //   setList: []
      // }
      // this.getListOfSets = this.getListOfSets.bind(this);
      // this.updateSetListDisplay = this.updateSetListDisplay.bind(this);
    }

    // componentDidMount() {
    //   this.props.getListOfSets(); 
    // }

    // updateSetListDisplay() {
    //   const setArray = [];
    //   if (this.props.showPrivateSets) {
    //     for (const set of this.state.persistingSetList) {
    //       if (set.private === true) setArray.push(set);
    //     }
    //   }
    //   if (this.props.showPublicSets) {
    //     for (const set of this.state.persistingSetList) {
    //       if (set.private === false) setArray.push(set);
    //     }
    //   }
    //   this.setState({ setList: setArray });
    // }

    // getListOfSets() {
    //   fetch('/cards/getAllSets')
    //   .then((data) => data.json())
    //   .then((jvsdata) => {
    //     const setArray = [];
    //     if (this.props.showPrivateSets) {
    //       for (const set of jvsdata) {
    //         if (set.private === true) setArray.push(set);
    //       }
    //     }
    //     if (this.props.showPublicSets) {
    //       for (const set of jvsdata) {
    //         if (set.private === false) setArray.push(set);
    //       }
    //     }
    //     this.setState({ setList: setArray, persistingSetList: setArray })
    //   })
    // }
  
    render() {
      
        return (
            <div className='setList'>
               {
               this.props.setList.map((setEl) => {
                return (
                  <SelectSet 
                  key={setEl._id}  
                  set={setEl}
                  getOneSet={this.props.getOneSet}
                  />
              )
               })
               }
            </div>
        )
    }
}

export default SelectSetList;