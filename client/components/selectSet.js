import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { MDCList } from '@material/list';
import Button from '@material-ui/core/Button';


export default function Selectset(props) {
    
    const getOneSet = props.getOneSet;
    const { _id, setname, user_id } = props.set;
    
    return (
        <div>
          <Button id={{_id}} onClick={() => getOneSet(_id)}>{setname}</Button>
        </div>
    );
  }
  
  