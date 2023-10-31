import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";


function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">For Skaters By Skaters</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#products">Productos</Nav.Link>
            <Nav.Link href="#products">Nosotros</Nav.Link>
            <Nav.Link href="#products">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#cartwidget">
              <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
