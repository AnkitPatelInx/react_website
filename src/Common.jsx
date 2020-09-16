import React from 'react';
import img from "./common.jpeg";

function Common(props) {
    const image = props.img ? props.img : img;
    
    return (
        <>
            <img src={image}></img>
            <h1>Welcome. {props.pageName}!</h1>
            <p>{props.description}</p>
        </>  
    );
}

export default Common;