import React, { useState } from 'react'
import './Card.css';
import { FaGithub } from 'react-icons/fa';

function Card({title,imageUrl,body, body2, body3, body4, body5}) {
    const[readmore, setReadMore] = useState(false);
    return (
        <div className='card-container'>
            <div className="image-container">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}<span> </span><FaGithub /></h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                    <p>{body2}</p>
                    <p>{body3}</p>
                    <p>{body4}</p>
                </div>
            </div>
            {}
        </div>
    )
}

export default Card
