import React from 'react';
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from "react-bootstrap";

function NavbarComponent() {
  return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">ACS Calculator</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="tips">Tips</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavbarComponent;
