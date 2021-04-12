import React from "react";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// import { ReactComponent as Logo } from "../../logo.svg";

import "./header.styles.scss";

import {
  changeSeasonToWinter,
  changeSeasonToSpring,
  changeSeasonToSummer,
  changeSeasonToFall,
} from "../../actions";

function Header() {
  const season = useSelector((state) => state.navbar.season);

  const dispatch = useDispatch();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="px-5 py-3 hidden lg:flex bg-gray-800"
    >
      <Navbar.Brand href="#home">
        <span className="">{season} 2021</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            onClick={() => dispatch(changeSeasonToWinter())}
            className={season === "WINTER" ? "isActive" : "notActive"}
          >
            Winter 2021
          </Nav.Link>
          <Nav.Link
            onClick={() => dispatch(changeSeasonToSpring())}
            className={season === "SPRING" ? "isActive" : "notActive"}
          >
            Spring 2021
          </Nav.Link>
          <Nav.Link
            onClick={() => dispatch(changeSeasonToSummer())}
            className={season === "SUMMER" ? "isActive" : "notActive"}
          >
            Summer 2021
          </Nav.Link>
          <Nav.Link
            onClick={() => dispatch(changeSeasonToFall())}
            className={season === "FALL" ? "isActive" : "notActive"}
          >
            Fall 2021
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
