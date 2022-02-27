/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Home.css";
import Homemain from "./Home-main";
import Rectangle2 from "../Images/Rectangle2.png";

function Home() {
  return (
    <div>
      <div>
        <img src={Rectangle2} className="Rectangle2" />
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
        <div className="changable">
          <div className="writepost"></div>
          <div className="joingrp"></div>
        </div>
        <hr className="hr-css"></hr>
        <div className="ex-3">
          <div className="loc-emoji"></div>
          <div className="location1"> Noida, India</div>
          <div className="pen-emoji"></div>
          <hr className="loc-border" />
          <div className="extra-loc-txt"></div>
        </div>
        <Homemain />
      </div>
    </div>
  );
}

export default Home;
