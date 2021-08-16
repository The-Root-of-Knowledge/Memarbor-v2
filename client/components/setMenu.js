import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
  
});

export default function SetMenu(props) {
  /**
   * Set menu will need to have an array of available sets passed down on props. When ready, replace temp array with array from props.
   */
  const availableSets = props.availableSets;
  const setsList = availableSets.map((setName, i) => {
    return (
      <MenuItem key={`opt${i}`} value={setName.setname}>{setName.setname}</MenuItem>
    )
  })
  const defaultChoice = 
    (props.currSet) ? <MenuItem value={props.currSet}>{props.currSet}</MenuItem> : <MenuItem value=""><em>No set selected</em></MenuItem>;

  return (
    <FormControl>
        <InputLabel id="setMenuLabel"></InputLabel>
        <Select
          labelId="setMenuLabel"
          displayEmpty
          renderValue={() => defaultChoice}
          id="setMenu"
          onChange={(event) => props.loadSet(event)}
        >
          {defaultChoice}
          {setsList}
        </Select>
        <FormHelperText>Sets you can add to</FormHelperText>
    </FormControl>
  );
}
