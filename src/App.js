import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap"
        rel="stylesheet"
      />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/eb482c64-e879-4e88-9ddc-d839cb7d1232/d03a05fb-39a4-4594-b16c-ddc39f35f5bd/IN-en-20220131-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="n-bg"
        className="n-bg"
        width="1600"
        height="770"
      />
      <div className="but-top-right">
        <Button variant="outline-secondary">English</Button>
        <Button variant="danger">Sign-in</Button>
      </div>
      <div className="section-1">
        <div className="f-1">Unlimited movies, TV shows and more.</div>
        <div className="f-2">Watch anywhere. Cancel anytime.</div>
        <div className="f-3">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
      </div>
    </div>
  );
}

export default App;
