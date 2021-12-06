import React, { useState } from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import Proj from './data/projData'
import racer from "./images/projectD.png"

const Projects = () => {

    //Data for project cards. 
    const proj = [
        {
            id: 0,
            title: "Portfolio Website",
            skills: ["ReactJS, Google Firebase, Bootstrap, Node.js, HTML, Sass"],
            description: [
                "Built and designed by myself. ",
                "Used Bootstrap as well as Sass for responsive design. ", 
                "Applied concepts learned in online courses such as React Hooks, Fetching API's etc. to create this website."
            ],
    
            img: "https://wallpaperaccess.com/full/3949076.jpg", 
            github: "https://github.com/sachx1/portfolio"
        }, 

        {
            id: 1,
            title: "Escape.exe",
            skills: ["C#, HTC Vive, Steam VR, Unity"],
            description: [
                "Escape.exe was the Capstone project that was built in my final years at York University. ",
                "Designed in Unity using C++ and Steam VR. ", 
                "Escape.exe had many features such as VR functionality, Voice Commands, and Teleportation. It also fully utilized the VR remotes for picking things up in game."
            ],
    
            img: "https://answers.unity.com/storage/temp/95464-screenshot-2017-06-06-13-47-08.png", 
            github: "https://github.com/sachx1/projects-api"
        },

        {
            id: 1,
            title: "Project D",
            skills: ["C++, Unreal Engine 4"],
            description: [
                "Project D was one of my last projects at York University. ",
                "This project was a racer built in Unreal Engine. My group chose this engine for the graphic fidelity it provided. ", 
                "Physics for the racer were manually done in C++. Menus and everything else were made in blueprints. Project D was built for Windows. "
            ],
    
            img: "https://wallpaperaccess.com/full/3645785.jpg", 
            //img: {racer},
            github: "https://github.com/sachx1/projects-api"
        },
    ];

    return (
        <>
            {proj.map((project) => ( //Loops through all the data and displays them in cards
                <article className="single-project">
                    <img src={project.img} alt="title" />
                    <footer>
                        <div className="project-info">
                            <h4><a href={project.github}><FaGithub /></a> {project.title}</h4>
                            <h4 className="project-skills">{project.skills}</h4>
                        </div>
                        <div className="project-desc">
                            <p>{project.description}</p>
                        </div>
                        <button ></button>
                    </footer>
                </article>
            ))}
        </>
    )
}

export default Projects
