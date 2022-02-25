import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import logo from "../Images/whole.png";

function Navbaro() {
  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbaro;
