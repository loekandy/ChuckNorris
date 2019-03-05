import React, { Component } from 'react';
import './App.css';
import 'andys-ui-comp/main.js';
import "react-datepicker/dist/react-datepicker.css";
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Mainbox from './components/MainBox';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/chucknorris">CoolNorris</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">Counter</Link>
              </li>
            </ul>
          </nav>
          <Route path="/chucknorris" component={Mainbox} />
          <Route path="/counter" component={Counter} />
        </div>
      </Router>
    );
  }
}

export default App;
