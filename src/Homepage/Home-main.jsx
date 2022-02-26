import React from "react";
import emojipedia from "./Home-content";
import "./Home-main.css";

function Entry(props) {
    return (
        <div className="props-border">
            <span > {props.image}<br /></span>
            <span className="type-css">{props.type}<br /></span>
            <span className="heading-css">  {props.heading}<br /></span>
            <span className="description-css">   {props.description}<br /></span>
            <span className="name-css">   {props.name}<br /></span>

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
                    />
                ))}
            </dl>
        </div>
    );
}

export default Homemain;
