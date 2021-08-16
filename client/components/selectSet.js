import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MDCList } from '@material/list';
import Button from '@material-ui/core/Button';

//const setList = new MDCList();
export default function Selectset(props) {
    // const useStyles = makeStyles({
    //     setlist: {
    //         backgroundColor: 'green',
    //         margin: 10
    //     }
    // });
    const getListOfSets = props.getListOfSets;
    const getOneSet = props.getOneSet;
    const { _id, setname, user_id } = props.set;
    
    return (
        <div>
          <Button id={{_id}} onClick={getOneSet}>{setname}</Button>
        </div>
    );
  }
  
  