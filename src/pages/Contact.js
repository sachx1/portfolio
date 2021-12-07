import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'

function Contact() {
    return (
        <>
            <div className="containerHome">
                <p className="contactSentence">Currently looking for <b>new positions</b> in both Canada and United States. Willing to relocate!</p>
            </div>
            <div className='containerHome'>
                {/* <h1><a className="mailto" href="mailto:sachin.khargie@gmail.com">Contact Me</a></h1> */}
               <a className="mailto" href="mailto:sachin.khargie@gmail.com"><button className="button button5"><AiOutlineMail /> Email</button></a>
               <a href="https://www.linkedin.com/in/sachin-khargie-17a248163/"><button className="button button5"><FaLinkedin /> LinkedIn</button></a>
               <a href="https://github.com/sachx1"><button className="button button5"><FaGithub /> Github</button></a>
            </div>
        </>
    )
}

export default Contact
