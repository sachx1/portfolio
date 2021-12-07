import React from 'react'

function Contact() {
    return (
        <>
            <div className="containerHome">
                <p className="contactSentence">Currently looking for <b>new positions</b> in both Canada and United States. Willing to relocate!</p>
            </div>
            <div className='containerHome'>
                {/* <h1><a className="mailto" href="mailto:sachin.khargie@gmail.com">Contact Me</a></h1> */}
               <a className="mailto" href="mailto:sachin.khargie@gmail.com"><button className="button button5">Contact Me</button></a>
            </div>
        </>
    )
}

export default Contact
