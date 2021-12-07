import React from 'react'
import './footer.scss'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const footer = () => {
    return (
        <div className="footer">
            <a href="https://github.com/sachx1/portfolio"><button className="footerButton"><FaGithub /> Built and Designed by Sachin Khargie</button></a>
            <a href="https://www.linkedin.com/in/sachin-khargie-17a248163/"><button className="footerButton"><FaLinkedin /></button></a>
        </div>
    )
}

export default footer;
