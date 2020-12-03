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
      <Navbar className="bg-info" expand="lg">
        <Navbar.Brand className="text-white" href="#home">Welcome Back, {UserProfile.getName()} </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-white">
            <Nav.Link as={NavLink} to="/Home" className="text-white">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Entry" className="text-white">Entry</Nav.Link>
            <Nav.Link as={NavLink} to="/Collection" className="text-white">Collection</Nav.Link>
            <Nav.Link as={NavLink} to="/TimeLine" className="text-white">Timeline</Nav.Link>
            <Nav.Link as={NavLink} to="/SavedQuotes" className="text-white">Saved Quotes</Nav.Link>
            <Nav.Link as={NavLink} to="/Register" className="text-white">Register</Nav.Link>
            <Nav.Link as={NavLink} to="Login" className="text-white">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default withRouter(Navs);
