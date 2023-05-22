import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { HashRouter, Route, Link } from 'react-router-dom';

import R from './images/icons/R.png';

const NaviBar =()=>{
      return (
                <Navbar bg="danger" expand="lg" fixed="top">
                    <Navbar.Brand as={Link} to="/">
                        <span className="header">
                        <img 
                            src={R}
                            width="30"
                            height="35"
                            className="d-inline-block align-middle"
                        />
                        {' '}
                        The Great Revel
                        {' '}
                        <img 
                            src={R}
                            width="30"
                            height="35"
                            className="d-inline-block align-center"
                        />
                        </span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
      )
}
export default NaviBar;