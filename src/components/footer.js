import React from 'react'
import './footer.scss'
import { FaGithub } from 'react-icons/fa';

const footer = () => {
    return (
        <div className="footer">
            <a href="https://github.com/sachx1/portfolio"><button className="footerButton"><FaGithub /> Built and Designed by Sachin Khargie</button></a>
        </div>
    )
}

export default footer;
