import React from "react";
import './Header.css';
import R from './images/icons/R.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar bg="danger" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/the-great-revel">
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
                        <Nav.Link href="/intro-to-burn">
                            <span className="section">Intro to Burn</span>
                        </Nav.Link>

                        <Nav.Link href="/sideboard-guide">
                            <span className="section">Sideboard Guide</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Header;