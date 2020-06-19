import React from "react";
import "./wrapper.css";

// Static component that render image to the screen
const Wrapper = props => {

    //JSX
    return(
        <div classNamw="wrapper">
            {props.children}
        </div>
    )
}

export default Wrapper;