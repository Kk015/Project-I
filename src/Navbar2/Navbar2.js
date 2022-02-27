import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import logo from "../Images/whole.png";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import "./Navbar2.css";

function Navbaro2() {
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
            <Navbar.Text className="sg-2">
              <Link to="/sign-in">
                <img
                  className="n4"
                  src={require("../Images/N4.png")}
                  alt="n4"
                />
                Siddharth Goyal{" "}
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbaro2;
