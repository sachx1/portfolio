import React, { Component } from 'react';
//import Card from 'react-bootstrap/Card';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import TabContainer from 'react-bootstrap/TabContainer';
// import Nav from 'react-bootstrap/Nav';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import WorkCard from './WorkCards/WorkCard';
import { Link } from 'react-router-dom';

function WorkExperience() {
    return (
        <>
        <div className='beginner'>
            <h3>Work Experience</h3>
        </div>

        <div className='underlineTwo'></div>
        
        <div className='projectsTwo'>
            <WorkCard 
                title="Toronto General Hospital - Web/Game Dev"
                imageUrl="https://wallpaperaccess.com/full/3909258.jpg"
                body="• Using ES6 JavaScript to create 3D WebGL Viewers hosted on Firebase. " 
                body2= "• Use of routers, to direct the user to different pages."
                body3="• Created pages via components and views."
            />
        </div>

        <div className='projectsTwo'>
            <WorkCard 
                title="York University - Game Dev and Tester"
                imageUrl="https://wallpaperaccess.com/full/3909258.jpg"
                body="• Tested and developed an AR App on both iOS and Android."
                body2="• Using different pipelines to create “AR Windows” to view objects within the space."
                body3="• Used C# to write scripts for the features, such as AR Portals, creating dynamic animations and for spawning objects."
            />
        </div>
        </>
    );
}



export default WorkExperience;
