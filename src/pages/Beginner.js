import React from 'react'
import * as FaIcons from "react-icons/fa";
import Card from './Card';
import { Link } from 'react-router-dom';

function Beginner() {
    return (
        <>
            <div className="btnPlacement">
                <Link to='/projects'>
                    <button className="projBtn">
                        <h3>Back to Project Page</h3>
                        <FaIcons.FaArrowLeft /> 
                    </button>
                </Link>
            </div>

            <div className="beginner">
                <h3>Beginner Projects</h3> 
            </div>

            <div className="underline"></div>
        </>
    );
}

export default Beginner
