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
  const availableSets = ['trees', 'birds'];
  const setsList = availableSets.map((setName) => {
    return (
      <MenuItem value={setName}>{setName}</MenuItem>
    )
  })

  const loadSet = (event) => {
    // This should update the state's currSet to whichever set was selected
  }

  return (
    <FormControl>
        <InputLabel id="setMenuLabel">Card set</InputLabel>
        <Select
          labelId="setMenuLabel"
          id="setMenu"
          // value={setName}
          onChange={loadSet}
        >
          <MenuItem value="">
            <em>No set selected</em>
          </MenuItem>
          {setsList}
        </Select>
        <FormHelperText>Sets you can add to</FormHelperText>
    </FormControl>
  );
}
