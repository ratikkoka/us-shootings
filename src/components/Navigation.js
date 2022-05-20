import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export function Navigation(props) {
  const { location } = props;
  return (
    <Navbar
      id="nav"
      className="py-0"
      fixed="top"
      bg="dark"
      variant="dark"
      expand="md"
    >
      <Container id="cont">
        <Navbar.Brand>
          <img
            src="../img/logo.svg"
            className="d-inline-block align-top"
            alt="US Shooting logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav activeKey={location.pathname}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/statistics">Statistics</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
