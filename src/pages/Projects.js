import React from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div className='projectsTwo'>
            <Link to="/beginner">
                <Card 
                title="Beginner React Projects"
                imageUrl="https://wallpaperaccess.com/full/3909258.jpg"
                body="My first ReactJS Projects which helped build strong fundamentals in ReactJS. These projects include using react hooks, state, context API, fetching, react router etc. "
                />
            </Link>

            <Link to="/escape">
                <Card 
                title="University Projects"
                imageUrl="https://images.hdqwalls.com/download/rog-logo-art-4k-q4-2560x1440.jpg"
                body="Throughout my University career, I had to build many interactive experiences and games inside Unity and Unreal Engine. These are my most notable works. "
                />
            </Link>
        </div>
    )
}

export default Projects
