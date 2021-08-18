import * as React from 'react';
//import * as Router from 'react-router-dom';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements.js';

function Navigation() {
  return(
      <Nav>
        <Bars/>
          <NavMenu>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/practice'>
              Practice Mode
            </NavLink>
            <NavLink to='/create'>
              Create Mode
            </NavLink>
            <NavLink to='/login'>
                Log In
            </NavLink>
            <NavLink to='/signup'>
                Sign Up
            </NavLink>
          </NavMenu>
      </Nav>
  )
}
export default Navigation;