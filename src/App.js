// import logo from "./logo.svg";
// import CardUIUX from "./components/Card/CardUIUX";
// react hooks untuk membuat state
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import "./App.css";
import Avatar from "./components/Avatar/Avatar";
import Card from "./components/Card/Card";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  //cara membuat state dalam react
  const [nameUser, setNameUser] = useState({
    absenSatu: "Skilvul",
    absenDua: "Thoriq",
    absenTiga: "Lutfi",
  });

  const [nameCard, setNameCard] = useState({
    cardFrontend: "PTP Frontend 123",
    cardUI: "PTP UI 123",
  });

  // sesuatu didalam return disebut jsx
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/:id"> <About /> </Route>
          <Route path="/:id"> <Contact /> </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
