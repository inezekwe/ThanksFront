import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import UserProfile from '../Components/UserProfile';
import "../css/Navs.css";

//Need to come back and refactor but testing not showing Navbar for login and register routes
function Navs(props) {
  if (props.location.pathname === '/Login' 
    || props.location.pathname === '/login'
    || props.location.pathname === '/Register' 
    || props.location.pathname === '/register') 
  {
    return false;
  }

  return (
    <div className="Navs">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">Welcome Back {UserProfile.getName()} </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Entry">Entry</Nav.Link>
            <Nav.Link as={NavLink} to="/Collection">Collection</Nav.Link>
            <Nav.Link as={NavLink} to="/TimeLine">Timeline</Nav.Link>
            <Nav.Link as={NavLink} to="/SavedQuotes">Saved Quotes</Nav.Link>
            <Nav.Link as={NavLink} to="/Register">Register</Nav.Link>
            <Nav.Link as={NavLink} onClick={UserProfile.resetProfile()} to="Login">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default withRouter(Navs);
