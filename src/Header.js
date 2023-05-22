import React from "react";
import './Header.css';
import R from './images/icons/R.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { NavItem } from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="danger" expand="lg" fixed="top">
            <Container>
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
                    <Nav className="me-auto">
                        <NavItem eventkey={1} href="/">
                            <Nav.Link as={Link} to="/intro-to-burn">
                                <span className="section">Intro to Burn</span>
                            </Nav.Link>
                        </NavItem>

                        <Nav.Link as={Link} to="/sideboard-guide">
                            <span className="section">Sideboard Guide</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Header;