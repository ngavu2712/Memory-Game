import React from "react";
import "./score.css";

// Static component that render image to the screen
let Score = props => {

    //JSX
    return(
        <div classNamw="gameScore">
            <h3 className="score">Your Score : {props.score} | Top Score: {props.topScore}</h3>
            {/* <h3 className="status">Top Score: {props.topScore}</h3> */}
        </div>
    )
}

export default Score;