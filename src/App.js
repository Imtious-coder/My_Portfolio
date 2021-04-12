import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Brain from './Components/Brain/Brain';
import Navbar from './Components/Home/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/brain">
          <Brain />
        </Route>
        <Route path="/navbar">
          <Navbar></Navbar>
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
