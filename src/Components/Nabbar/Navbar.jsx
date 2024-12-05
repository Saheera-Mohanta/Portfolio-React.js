import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

function TextLinkExample() {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="nav">
      <Container>
        <Navbar.Brand className="logo" href="#home">
          WebDev.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text">
            {/* Correct usage of Link */}
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Eduction">Eduction</Link>
            <Link to="/Project">Project</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;
