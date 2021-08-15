import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MDCList } from '@material/list';

//const setList = new MDCList();
export default function Selectset(props) {
    // const classes = useStyles();
    const getListOfSets = props.getListOfSets;
    const { _id, setname, user_id } = props.set;
    
    return (
        <div>
          <div><strong>Set Name: </strong>{setname}</div>
        </div>
    );
  }
  
