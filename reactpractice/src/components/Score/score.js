import React from "react";
import "./score.css";

// Static component that render image to the screen
const Score = props => {

    //JSX
    return(
        <div classNamw="gameScore">
            <h3 className="score">Your Score : {props.total}</h3>
            <h3 className="status">{props.status}</h3>
        </div>
    )
}

export default Score;