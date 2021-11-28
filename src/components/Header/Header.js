import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
 import log from './../../assets/images/log/log.png'
 import './Header.css'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
  const {AllContexts} =useAuth();
  const {user, logOut} = AllContexts;
  const {displayName,photoURL } = user;

   return (
       
    <Navbar  sticky="top" className="header" expand="lg">
    <Container className="navbar">
    <Navbar.Brand href="#home"><img width="70px" src={log} alt="" /> <span className="font-size">Comilla Morden Hospital</span> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className="ms-auto align-items-center">
        <Nav.Link as={NavLink} className="text-white" to="/home">Home</Nav.Link>

        <Nav.Link as={NavLink} className="text-white" to="/about">About</Nav.Link>
        
        <Nav.Link as={NavLink} className="text-white" to="/contact">Contact</Nav.Link>

        <Nav.Link as={NavLink} className="text-white" to="/services">Service</Nav.Link>

        <Nav.Link className="text-white" to="/cart"> <FontAwesomeIcon icon={faHandHoldingMedical} /></Nav.Link>

        {!displayName? ( 
        <>
          <Nav.Link as={NavLink} className="text-white" to="/signup">Sign Up</Nav.Link>
         
         <Nav.Link as={NavLink} className="text-white" to="/login">Log in</Nav.Link>
        
        </> 
        ):(
          <NavDropdown title={ <img style={{width: '45px', borderRadius:'50%'}} src={photoURL} alt="" />} >

          <div className="text-center">
             <h6>{displayName}</h6>
            <button onClick={logOut} className="btn btn-info">Sign Out</button>
          </div>

        </NavDropdown>
        )}
     </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      
    );
};

export default Header;