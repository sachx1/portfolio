
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //Switch uses npm install react-router-dom@5.2.0 anything above that this line wont work
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects'  exact component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
