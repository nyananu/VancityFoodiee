import React from "react";

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <h6>Instructions for {props.title}</h6>
            <p>{props.instructions}</p>
            <button className="closeButton" onClick={() => props.setTrigger(false)}>
                close
            </button>
        </div>
    ) : "";
}

export default Popup;