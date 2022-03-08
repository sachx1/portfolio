import React from 'react'
import { Link } from 'react-scroll';
import './Menu.scss';

function Menu() {
    return (
        <>
       
        <div className='navigation'>
                    <Link to="home" smooth={true} duration={2000}>Home</Link>
                    <Link to="experience" smooth={true} duration={2000}>Experience</Link>
                    <Link to="projects" smooth={true} duration={2000}>Projects</Link>
                    <Link to="education" smooth={true} duration={2000}>Education</Link>
                    <Link to="contact" smooth={true} duration={2000}>Contact</Link>
                    <a href="https://drive.google.com/file/d/1XR0xArkmO_tkKdw_WjT-4aCGm5gjRjKP/view?usp=sharing" target="_blank" rel="noreferrer noopener">Resume</a>

        </div>
            
        </>
    )
}

export default Menu
