import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Sign2/Sign2.css";
import { Link } from "react-router-dom";

function Sign2() {
  return (
    <div className="sign-main-div">
      <Link to="/">
        <div className="start-close-sign"></div>
      </Link>
      <div className="green-div">
        <span className="green-txt-main">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </span>
      </div>
      <div className="heading-div">
        <span className="s-heading">Sign in</span>
        <span className="s-heading2">Don’t have an account yet? </span>
        <Link to="/sign-in">
          <span className="s-heading3 ">Create new for free!</span>
        </Link>
      </div>
      <Container>
        <Row>
          <Col>
            <form>
              <div className="form-div">
                <input type="email" placeholder="Email" className="email" />
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                />
                <Link to="/Home2">
                  <Button className="create-account">Sign-in </Button>
                </Link>
                <div className="google-sign"></div>
                <br />
                <div className="fb-sign"></div>
              </div>
            </form>
          </Col>
          <Col>
            <div className="sign-in-photo"></div>
            <div className="forgot-passwordtxt">Forgot Password?</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Sign2;
