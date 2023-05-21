import React from "react";

import '../App.css';

function Subtitle(props) {
    return (
        <div className="subtitle-text">
            {props.text}
        </div>
    );
}

export default Subtitle;