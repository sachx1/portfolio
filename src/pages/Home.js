import React, { Component } from 'react'
import { BlinkingCursorTextBuilder } from 'react-animated-text-builders';
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/me.jpg";

function Home() {
    return (
        <main>

            <div className='roundImg'>
                <ReactRoundedImage image={MyPhoto} />
            </div>

            <div className='homeText'>
                <p>Hi, my name is<br></br>
                <h3>Sachin Khargie</h3> 
                <h5>I'm a developer who builds things for both the web</h5>
                <h5>and for devices.</h5>
                </p>
            </div>
            
            <div className='underline'></div>

            <div className='homeTextTwo'>
                <div className='york'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Logo_York_University.svg/1200px-Logo_York_University.svg.png" alt='York Emblem' />
                </div>      
            </div>

            <div className='homeTextThree'>
                <p>Graduated from York University on April 2021 <br></br>
                <p>with Honors in Digital Media (Software and Game Development)</p> </p> 
            </div>

            <div className='underline' />

            <div className='homeTextTwo'>
                <div className='uhn'>
                    <img src="https://apil.ca/wp-content/uploads/2021/09/UHNF-Hosp-webheader-1.png" alt='UHN Emblem' />
                </div>
             </div>   

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
