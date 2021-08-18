import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import homePageLogo from '../../images/The-Root-Of-Knowledge-Icon.jpeg'
import theme from '../material-ui/theme.js';
const useStyles = makeStyles({
  homePageContainer: {
    margin: 40,
  }
});

function HomePage(props) {
  const classes = useStyles();
  function nextPath(path) {
    props.history.push(path);
  }
  return(
    <div id="homePageContainer" className={classes.homePageContainer}>
      <h1>MemArbor</h1>
      <img id='homePageLogo' src={homePageLogo} alt='The Root Of Knowledge Icon'></img>
      <ThemeProvider theme={theme}>
        <Button className={classes.routeButton} onClick={() => nextPath('/login')} color="primary" variant="contained" size="large">Sign in</Button>
      </ThemeProvider>
    </div>
  )
}

export default withRouter(HomePage);