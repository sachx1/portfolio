import React from 'react'
import * as FaIcons from "react-icons/fa";
import Card from './Card';
import { Link } from 'react-router-dom';
import Tour from "./images/tourism.jpg";

function Beginner() {
    return (
        <>
        <main></main>
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

            <div className="underlineTwo"></div>

            <div className='displayLeft'>
                <iframe id="inlineFrameExample"
                    title="Inline Frame Example"
                    width="1024"
                    height="576"
                    src="https://tourismapp-1ebce.web.app/">
                </iframe>

                <div className='textRight'>
                    <ul>
                        <li>Tourism App built fully in ReactJS</li>
                        <br />
                        <li>Cards which detail trips from around the world</li>
                        <br />
                        <li>Used React Hooks such as useState and useEffect</li>
                        <br />
                        <li>Implements fetch to get data for tours</li>
                        <br />
                        <li><a href="https://tourismapp-1ebce.web.app/">Click here </a>to see full web-app</li>
                    </ul>
                </div>
            </div>

            <div className='displayLeft'>
                <iframe id="inlineFrameExample"
                    title="Inline Frame for Birthday App"
                    width="1024"
                    height="576"
                    src="https://birthdayreminder-e4527.web.app/">
                </iframe>

                <div className='textRight'>
                    <ul>
                        <li>Simple Birthday App built in ReactJS</li>
                        <br />
                        <li>Card which holds a list of people with birthdays</li>
                        <br />
                        <li>Uses React Hooks such as useState</li>
                        <br />
                        <li>Uses map function to take local data and display it </li>
                        <br />
                        <li><a href="https://birthdayreminder-e4527.web.app/">Click Here</a> to see full web-app</li>
                    </ul>
                </div>
            </div>

            <div className="displayLeft">
                <iframe id="InlineFrameForReviewApp"
                    title="Review App"
                    width="1024"
                    height="576"
                    src="https://reviewapp-31da2.web.app/">
                </iframe>

                <div className="textRight">
                    <ul>
                        <li>Simple Review App built in ReactJS</li>
                        <br></br>
                        <li>Card which holds review data like profile pic etc.</li>
                        <br></br>
                        <li>Uses React Hooks like useState for local data</li>
                        <br></br>
                        <li>Imported icons using React Icons</li>
                        <br></br>
                        <li><a href="https://reviewapp-31da2.web.app/">Click Here</a> to see the full web-app</li>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default Beginner
