import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Brain from './Components/Brain/Brain';
import Navbar from './Components/Home/Navbar/Navbar';
import AllProjects from './Components/Projects/AllProjects/AllProjects';
import Footer from './Components/Home/Footer/Footer';
import Form from './Components/Home/Form/Form';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import ProjectDetails from './Components/Projects/ProjectDetails/ProjectDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/brain">
          <Brain />
        </Route>
        <Route path="/navbar">
          <Navbar />
        </Route>
        <Route path="/allprojects">
          <AllProjects />
        </Route>
        <Route path="/footer">
          <Footer />
        </Route>
        <Route path="/mail">
          <Form />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/projectDetails/:projectName">
          <ProjectDetails />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
