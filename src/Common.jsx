import React from 'react';
import ccc from "./common.jpeg";

function Common(props) {
    const iii = props.img ? props.img : ccc;
    
    return (
        <>
            <img src={iii} alt="IMAGE"></img>
            <h1>Welcome. {props.pageName}!</h1>
            <p>{props.description}</p>
        </>  
    );
}

export default Common;