import React from "react";

import '../App.css';

function Title(props) {
    return (
        <div className="title-text">
            {props.text}
        </div>
    );
}

export default Title;