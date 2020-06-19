import React from "react";
import "./image.json";

// Static component that render image to the screen
const imgCard = props => {

    //JSX
    <div className="card img-container hover">

        <img className="shuffleCard" id={props.id} src={props.image} alt={props.alt}/>

    </div>

}

export default Card;