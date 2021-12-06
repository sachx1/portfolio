import React, { useState } from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import Proj from './data/projData'

const Projects = () => {
    const proj = [
        {
            id: 0,
            title: "Portfolio Website",
            skills: ["ReactJS, Google Firebase, Bootstrap, Node.js, HTML, Sass"],
            description: [
                "Build and designed by myself",
                "Used Bootstrap as well as Sass for responsive design", 
                "Applied concepts learned in online courses such as React Hooks, Fetching API's etc. to create this website"
            ],
    
            img: "https://wallpaperaccess.com/full/3949076.jpg", 
            github: "https://github.com/sachx1/portfolio"
        }, 
        {
            id: 1,
            title: "Virtual Reality Escape Room",
            skills: ["C#, HTC Vive, Steam VR, Unity"],
            description: [
                "Build and designed by myself",
                "Used <b>Bootstrap</b> as well as <b> Sass </b> for responsive design", 
                "Applied concepts learned in online courses such as React Hooks, Fetching API's etc. to create this website"
            ],
    
            img: "https://wallpaperaccess.com/full/3949076.jpg", 
            github: "https://github.com/sachx1/portfolio"
        },
    ];

    return (
        <>
            {proj.map((project) => (
                <article className="single-project">
                    <img src={project.img} alt="title" />
                    <footer>
                        <div className="project-info">
                            <h4>{project.title}</h4>
                            <h4 className="project-skills">{project.skills}</h4>
                        </div>
                        <div className="project-desc">
                            <p>{project.description}</p>
                        </div>
                        <button className="link-btn"> Github Link </button>
                    </footer>
                </article>
            ))}
        </>
    )
}

export default Projects
