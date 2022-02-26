import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import logo from "../Images/whole.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbaro() {
  return (
    <div className="Navbar-css">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <div className="searchbar"></div>
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
