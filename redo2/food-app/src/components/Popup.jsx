import React from "react";

function Popup(props) {
    return (
        <div className="popup">
            <h6>Instructions for {props.title}</h6>
            <p>{props.instructions}</p>
        </div>
    );
}

export default Popup;