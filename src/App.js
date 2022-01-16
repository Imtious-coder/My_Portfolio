import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Home/Footer/Footer';
import Form from './Components/Home/Form/Form';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Home/Navbar/Navbar';
import AllProjects from './Components/Projects/AllProjects/AllProjects';
import ProjectDetails from './Components/Projects/ProjectDetails/ProjectDetails';
import Resume from './Components/Resume/Resume';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
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

// Main Branch --------Update 02 -----------
export default App;
