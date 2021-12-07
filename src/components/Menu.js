import React from 'react'
import * as FaIcons from "react-icons/fa"; //saves time
import * as AiIcons from "react-icons/ai"; //saves time
import { Link } from 'react-scroll';
import { SidebarData } from './SidebarData';
import './Menu.scss';
import { IconContext } from 'react-icons';

function Menu() {
    return (
        <>
       
        <div className='navigation'>
                    <Link to="home" smooth={true} duration={2000}>Home</Link>
                    <Link to="experience" smooth={true} duration={2000}>Experience</Link>
                    <Link to="projects" smooth={true} duration={2000}>Projects</Link>
                    <Link to="education" smooth={true} duration={2000}>Education</Link>
                    <Link to="contact" smooth={true} duration={2000}>Contact</Link>
                    <a href="#">Resume</a>

        </div>
            
        </>
    )
}

export default Menu
