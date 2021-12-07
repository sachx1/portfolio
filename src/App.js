import './components/App.scss';
import Menu from './components/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //Switch uses npm install react-router-dom@5.2.0 anything above that this line wont work
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import React from 'react';
import Work from './pages/WorkExperience'
import Project from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/footer'



function App() {

  let Link      = Scroll.Link;
  let Button    = Scroll.Button;
  let Element   = Scroll.Element;
  let Events    = Scroll.Events;
  let scroll    = Scroll.animateScroll;
  let scrollSpy = Scroll.scrollSpy;
  
  return (
    <>
      <Menu />  
      <div id="home">
        <Home />
      </div>

      <div className="container" id="experience">
        <div className="title">
          <h2>Experience</h2>
        </div>

        <div id="work">
          <Work />
        </div>
      </div>

      <div className="title" id="projects">
        <h2>Projects</h2>
      </div>

      <div className="containerProj">
        <Project />
      </div>

      <div className="title" id="education">
        <h2>Education</h2>
      </div>

      <div className="containerEdu">
        <AboutMe />
      </div>

      <div className="title" id="contact">
        <h2>Contact Me</h2>
        
      </div>

      <Contact />

      <Footer />
      
    </>
  );
}

export default App;
