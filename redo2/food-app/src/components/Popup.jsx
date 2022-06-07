import React from "react";

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            <h2>Instructions for {props.title}</h2>
            <p>{props.instructions}</p>
            <button className="closeButton" onClick={() => props.setTrigger(false)}>
                close
            </button>
            </div>
        </div>
    ) : "";
}

export default Popup;