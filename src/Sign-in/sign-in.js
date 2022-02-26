import React from "react";
import "./sign-in.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="sign-main-div">
      <Link to="/">
        {" "}
        <div className="start-close-sign"></div>;
      </Link>
      <div className="green-div">
        <span className="green-txt-main">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </span>
      </div>
      <div className="heading-div">
        <span className="s-heading">Create account</span>
        <span className="s-heading2">Already have an account?</span>
        <Link to="/sign2">
          <span className="s-heading3 ">Sign In</span>
        </Link>
      </div>
      <Container>
        <Row>
          <Col>
            <form>
              <div className="form-div">
                <input type="text" placeholder="First Name" className="text" />
                <input type="text" placeholder="Last Name" className="text" />
                <input type="email" placeholder="Email" className="email" />
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="password"
                />
                <Button className="create-account">Create Account</Button>
                <div className="google-sign"></div>
                <br />
                <div className="fb-sign"></div>
              </div>
            </form>
          </Col>
          <Col>
            <div className="sign-in-photo"></div>
            <div className="agreeing-txt">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Signin;
