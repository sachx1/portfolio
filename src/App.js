import './components/App.scss';
import Menu from './components/Menu';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import React from 'react';
import Work from './pages/WorkExperience'
import Project from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/footer'

function App() {
  
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
