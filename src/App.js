import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>
              <Link to="/basic" style={{textDecoration: 'none', color:"#fff"}}>Basic</Link>
            </li>
            <li>
              <Link to="/urlparameter" style={{textDecoration: 'none', color:"#fff"}}>Url Parameters</Link>
            </li>
            <li>
              <Link to="/redirects" style={{textDecoration: 'none', color:"#fff"}}>Redirects (Auth)</Link>
            </li>
            <li>
              <Link to="/customlink" style={{textDecoration: 'none', color:"#fff"}}>Custom Link</Link>
            </li>
            <li>
              <Link to="/preventingtransition" style={{textDecoration: 'none', color:"#fff"}}>Preventing Transitions</Link>
            </li>
            <li>
              <Link to="/nomatch" style={{textDecoration: 'none', color:"#fff"}}>No Match (404)</Link>
            </li>
            <li>
              <Link to="/recursive" style={{textDecoration: 'none', color:"#fff"}}>Recursive Paths</Link>
            </li>
            <li>
              <Link to="/sidebar" style={{textDecoration: 'none', color:"#fff"}}>Sidebar</Link>
            </li>
            <li>
              <Link to="/animation" style={{textDecoration: 'none', color:"#fff"}}>Animation transitions</Link>
            </li>
            <li>
              <Link to="/ambiguous" style={{textDecoration: 'none', color:"#fff"}}>Ambiguous Matches</Link>
            </li>
            <li>
              <Link to="/routeconfig" style={{textDecoration: 'none', color:"#fff"}}>Sidebar</Link>
            </li>
            <li>
              <Link to="/modal" style={{textDecoration: 'none', color:"#fff"}}>Modal Gallery</Link>
            </li>
            <li>
              <Link to="/staticrouter" style={{textDecoration: 'none', color:"#fff"}}>Static Router</Link>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
