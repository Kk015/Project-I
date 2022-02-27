import React from "react";
import recgrp from "./Rec-grp";
import "./Rec-grp.css";
function Entry(props) {
  return (
    <div className="rg-grp">
      <span>{props.image2}</span>
      <span className="heading2-css">{props.heading2}</span>
      <div className="follow-div">
        <span className="follow-css">
          {props.follow}
          <br />
        </span>
      </div>
    </div>
  );
}
function Homemain2() {
  return (
    <div>
      <dl className="dictionary">
        {recgrp.map((emojiTerm) => (
          <Entry
            key={emojiTerm.id}
            image2={emojiTerm.image2}
            heading2={emojiTerm.heading2}
            follow={emojiTerm.follow}
          />
        ))}
      </dl>
    </div>
  );
}

export default Homemain2;
