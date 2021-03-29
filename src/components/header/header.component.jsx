import React from "react";
// import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// import { ReactComponent as Logo } from "../../logo.svg";

import "./header.styles.scss";

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="px-5 py-3">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="38"
        height="38"
        className="d-inline-block align-top mr-3 logo"
      />
      {/* <span className="mb-3">Nekomori</span> */}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/home">Winter 2021</Nav.Link>
        <Nav.Link href="/link">Spring 2021</Nav.Link>
        <Nav.Link href="/home">Summer 2021</Nav.Link>
        <Nav.Link href="/link">Fall 2021</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
