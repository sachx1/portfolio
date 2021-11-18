import React, { Component } from 'react'
import { BlinkingCursorTextBuilder } from 'react-animated-text-builders';
import * as FaIcons from "react-icons/fa";

function Home() {
    return (
        <main>

            <div className='homeText'>
                <p>Hi, my name is<br></br>
                <h3>Sachin Khargie</h3> 
                <h5>I'm a developer who builds things for both the web</h5>
                <h5>and for devices.</h5>
                </p>
            </div>
            
            <div className='underline'></div>

            <div className='homeTextTwo'>
                <p>Currently working at Toronto General Hospital<br></br>
                <p>as both a game and web developer.</p>
                </p>
            </div>

            <div className='underline'></div>

            <div className='homeTextTwo'>
                <a href="https://www.linkedin.com/in/sachin-khargie-17a248163/"><h3 className='spacedOut'>LinkedIn</h3></a>
                <a href="https://github.com/sachx1"><h3 className='spacedOut'>Github</h3></a>
            </div>
        </main>
    );
}

export default Home
