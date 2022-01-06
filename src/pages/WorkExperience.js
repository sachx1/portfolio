import React, { useState } from 'react';
import Exp from './data/workData';
import { FaChevronLeft, FaChevronRight, FaLocationArrow, FaMapMarkerAlt } from 'react-icons/fa';

    const WorkExperience = () => {
        const [index, setIndex] = useState(0); 
        const {title, company, location, date, text, textTwo, textThree, textFour, textFive} = Exp[index];

        const checkNumber = (number) => {
            if (number > Exp.length - 1){
                return 0;
            }

            if (number < 0){
                return Exp.length - 1;
            }
            return number;
        }

        const nextPerson = () => {
            setIndex((index) => {
                let newIndex = index + 1;
                return checkNumber(newIndex);
            });
        }

        const prevPerson = () => {
            setIndex((index) => {
                let newIndex = index - 1;
                return checkNumber(newIndex);
            });
        }

        return (
            <>
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
                        <button className="prev-btn" onClick={prevPerson}>
                            <FaChevronLeft />
                        </button>
                        <button className="next-btn" onClick={nextPerson}>
                            <FaChevronRight />
                        </button>
                    </div>
                </article>
            </>
        );
    }




export default WorkExperience;
