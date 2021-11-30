import React, { useState } from 'react'
import './WorkCard.css';

function WorkCard({title,imageUrl,body, body2, body3}) {
    return (
        <div className='card-container'>
            <div className="image-container">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                    <br />
                    <p>{body2}</p>
                    <br />
                    <p>{body3}</p>
                </div>
            </div>
            {}
        </div>
    )
}

export default WorkCard;


