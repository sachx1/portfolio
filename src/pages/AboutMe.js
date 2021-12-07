import React, { Component }from 'react'
import * as FaIcons from "react-icons/fa"; //saves time



function AboutMe() {
    return (
        <>
            <article className="single-project"> {/*Using the same variables that built the project cards */}
                    <img src="https://pbs.twimg.com/media/EjvzvdoXYAICyPg.jpg" alt="york" />
                <footer>
                    <div className="project-info">
                        <h4 className="school">York University</h4>
                        <h4 className="project-skills">September 2016 - April 2021</h4>
                    </div>
                        <div className="project-desc">
                            <p>Throughout my time at York University, I learned so much about software development, game design, coding practises, design practises etc. 
                                During my first and second year, the professors at York would give us challenging yet exciting problems and assignments which would help in building the fundamentals
                                needed for more advanced projects in Third and Fourth year. During my Third and Fourth year, I had developed a series of games and one major game known as Escape.exe which served
                                as my Capstone project. This helped build great knowledge of languages such as C++ and C#; as well as good coding practises and discipline for meeting deadlines. 
                            </p>
                        </div>
                    <button></button>
                </footer>
            </article>
                
        </>
    );
}

export default AboutMe
