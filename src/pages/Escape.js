import React from 'react'
import * as FaIcons from "react-icons/fa";
import Card from './Card';
import { Link } from 'react-router-dom';

function Escape() {
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
        
            <div className="escape">
                <h3>University Projects</h3> 
            </div>
            <div className="underline"></div>
        </>

    );
}

export default Escape
