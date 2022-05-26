import React, { useState } from 'react';
import Exp from './data/workData';
import { FaChevronLeft, FaChevronRight, FaLocationArrow, FaMapMarkerAlt } from 'react-icons/fa';

    const WorkExperience = () => {
        const [index, setIndex] = useState(0); 
        const {title, company, location, date, text, textTwo, textThree, textFour, textFive} = Exp[index];

        //wraps around from last work experience to the beginning (most recent)
        const checkNumber = (number) => {
            if (number > Exp.length - 1){
                return 0;
            }

            if (number < 0){
                return Exp.length - 1;
            }
            return number;
        }

        //goes forward inside work experience card
        const next = () => {
            setIndex((index) => {
                let newIndex = index + 1;
                return checkNumber(newIndex);
            });
        }

        //goes backwards in the work experience card
        const prev = () => {
            setIndex((index) => {
                let newIndex = index - 1;
                return checkNumber(newIndex);
            });
        }

        return (
            <>
                {/* creates an article that displays all work experience */}
                <article className='experience'>
                    {/* <div className="img-container">
                        <img src={image} alt={title} />
                    </div> */}
                    <h4 className='titleTwo'>{title}</h4>
                    <p className='company'>{company}</p>
                    <p className='company'><FaLocationArrow /> {date}</p>
                    <p className='company'><FaMapMarkerAlt /> {location}</p>
                    <p className='info'>{text}</p>
                    <p className='info'>{textTwo}</p>
                    <p className='info'>{textThree}</p>
                    <p className='info'>{textFour}</p>
                    <p className='info'>{textFive}</p>
                    <div className="button-container">
                        <button className="prev-btn" onClick={prev}>
                            <FaChevronLeft />
                        </button>
                        <button className="next-btn" onClick={next}>
                            <FaChevronRight />
                        </button>
                    </div>
                </article>
            </>
        );
    }




export default WorkExperience;
