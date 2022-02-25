import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div>
        <div className="Rectangle2"></div>
        <span className="Rectangle2-txt">
          Computer Engineering <br />
        </span>
        <span className="Rectangle2-txt-2">
          142,765 Computer Engineers follow this
        </span>

        <div class="pill-nav post-nav">
          <a class="active" href="#home">
            All Posts(32)
          </a>
          <a href="#news">Articule</a>
          <a href="#contact">Event</a>
          <a href="#about">Education</a>
          <a href="#about">Job</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
