/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import logo from "../Images/whole.png";
import { Link } from "react-router-dom";
import Group29 from "../Images/Group29.png";
import "./Navbar.css";

function Navbaro() {
  return (
    <div className="Navbar-css">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <img src={Group29} className="searchbar"></img>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to="/sign-in">Create account. It’s free! </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbaro;
