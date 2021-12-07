import React from 'react'
import * as FaIcons from "react-icons/fa"; //saves time
import * as AiIcons from "react-icons/ai"; //saves time
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Menu.scss';
import { IconContext } from 'react-icons';

function Menu() {
    return (
        <div className='navigation'>
            
            <a href="#">Home</a>
            <a href="#" onClick={() => window.location.replace("/#work")}>Experience</a>
            <a href="#">Projects</a>
            <a href="#">Education</a>
            <a href="#">Contact</a>
            <a href="#">Resume</a>
           
        </div>
    )
}

export default Menu
