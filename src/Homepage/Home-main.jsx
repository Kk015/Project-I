import React from "react";
import emojipedia from "./Home-content";
import "./Home-main.css";

function Entry(props) {
    return (
        <div className="props-border">
            <span > {props.image}<br /></span>
            <div className="prop-content-padding">
                <span className="type-css">{props.type}<br /></span>
                <span className="heading-css">  {props.heading}<br /></span>
                <span className="description-css">   {props.description}<br /></span>
                <span className="description-css">   {props.nameimg}</span>
                <span className="name-css">   {props.name} </span>

            </div>
            <div className="view-share">
                <div className="views"></div>
                <div className="share"></div>
            </div>
        </div>
    );
}
function Homemain() {
    return (
        <div>
            <dl className="dictionary">
                {emojipedia.map((emojiTerm) => (
                    <Entry
                        key={emojiTerm.id}
                        image={emojiTerm.image}
                        type={emojiTerm.type}
                        name={emojiTerm.name}
                        description={emojiTerm.description}
                        heading={emojiTerm.heading}
                        nameimg={emojiTerm.nameimg}
                    />
                ))}
            </dl>
        </div>
    );
}

export default Homemain;
