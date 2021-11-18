import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //Switch uses npm install react-router-dom@5.2.0 anything above that this line wont work
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import WorkExperience from './pages/WorkExperience';
import AboutMe from './pages/AboutMe';
import Beginner from './pages/Beginner';
import Escape from './pages/Escape';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects'  exact component={Projects} />
          <Route path='/skills' exact component={Skills} />
          <Route path='/workexp' exact component={WorkExperience} />
          <Route path='/aboutme' exact component={AboutMe} />
          <Route path='/beginner' exact component={Beginner} />
          <Route path='/escape' exact component={Escape} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
