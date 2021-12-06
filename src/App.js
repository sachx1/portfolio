import './components/App.scss';
//import NavBar from './components/NavBar';
import Menu from './components/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //Switch uses npm install react-router-dom@5.2.0 anything above that this line wont work
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import WorkExperience from './pages/WorkExperience';
import AboutMe from './pages/AboutMe';
import Beginner from './pages/Beginner';
import Escape from './pages/Escape';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import React from 'react';
import Work from './pages/WorkExperience'
import Project from './pages/Projects'



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

      <div className="container">
        <div className="title">
          <h2>Experience</h2>
        </div>

        <div id="work">
          <Work />
        </div>
      </div>

      <div className="title">
        <h2>Projects</h2>
      </div>
      <div className="containerProj">
        <Project />
      </div>
    </>
  );
}

export default App;
