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

      // <Router>
      //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //     <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      //       <li class="nav-item active">
      //         <a class="nav-link"><Link to="/">Home</Link></a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link"><Link to="/chucknorris">Cool</Link></a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link"><Link to="/counter">Not Cool</Link></a>
      //       </li>
      //       <li></li>
      //     </ul>
      //   </nav>
      //   <Route path="/chucknorris" component={Mainbox} />
      //   <Route path="/counter" component={Counter} />
      // </Router>


      /* <Router>
        <div>
        <nav className="navbar navbar-reverse">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/chucknorris">HumorMe</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
          <hr />
          <Route path="/chucknorris" component={Mainbox} />
          <Route path="/counter" component={Counter} />
          </nav>
        </div>
      </Router> */
    );
  }
}

export default App;
