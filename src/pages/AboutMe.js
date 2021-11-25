import React, { Component }from 'react'
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/me.jpg";

function AboutMe() {
    return (
        <>
            <div className='roundImg'>
                <ReactRoundedImage image={MyPhoto} />
            </div>
            
            <div className='aboutme'>
                <h1>About Me</h1>
                
            </div>
        </>
    );
}

export default AboutMe
