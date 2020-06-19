import React from "react";
import "./card.css";

// Static component that render image to the screen
const Card = props => {

    //JSX
    return (
        <div className="card img-container hover">
    
            <img className="shuffleCard" id={props.id} src={props.image} alt={props.alt}/>
    
        </div>
    )
}

export default Card;