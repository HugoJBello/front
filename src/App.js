import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Roots from './components/Roots';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar></Navbar>
            <div>
              <Roots></Roots>
            </div>
          </div>
        </Router>
      </div>
    );
  }

}

export default App;
