import React from "react";

import '../App.css';

function CardHover(props) {
    return (
        <div className="card-hover">
            <span class="card-name">
                <a>
                    {props.text}
                </a>
            </span>
            <span class="card-image-span">
                <img class="card-image" src={props.image}/>
            </span>
        </div>
    );
}

export default CardHover;