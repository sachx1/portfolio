import React, { useState, useEffect } from 'react'
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/me.jpg";
import Card from 'react-bootstrap/Card'
import "animate.css/animate.min.css";
import Typist from 'react-typist'


function Home() {

    //counter for the typist animation
    const [count, setCount] = useState(1);

    //initiates the counter
    useEffect(() => {
        console.log("Count: " + count);
        setCount(1);
    }, [count]);

    return (
        <main>
            <div className='containerHome'>
                    <Card>
                    <Card.ImgOverlay>
                        <Card.Text>
                        <ReactRoundedImage image={MyPhoto} imageWidth="300" imageHeight="300" roundedSize="13" />
                        </Card.Text>
                    </Card.ImgOverlay>
                    </Card>

            </div>

            <div className='containerHomeName'>
                <p>Hi, my name is</p>
            </div>

            <div className='containerHomeNameTwo'>
                <Typist><Typist.Delay ms={1000} />Sachin Khargie</Typist>
                
            </div>

            <div className='containerHomeNameTwo'>
                <p>I build things {count ? (
                <Typist loop="true" avgTypingDelay={100} onTypingDone={() => setCount(0)}><Typist.Delay ms={2000} />with <span className='nodeJS'> Node.js</span>
                <Typist.Backspace count={13} delay={750} />using <span className='google'>Google Firebase</span>
                <Typist.Backspace count={21} delay={1000} />for <span className='cSharp'>Unity using C#</span>
                <Typist.Backspace count={18} delay={1000} /></Typist> //dummy line to allow for looping
                ) : (
                    ""
                )}</p>

            </div>

           

        </main>
    );
}

export default Home
