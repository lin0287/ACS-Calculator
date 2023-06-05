import React from 'react';
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">ACS Calculator</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="tips">Tips</Nav.Link>
          <Nav.Link as={Link} to="contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
