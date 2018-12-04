import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Content from './Pages/Content';
import Pokemons from './Pages/Pokemons';
import logo from './unimo-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
              <ul className="App-nav">
                <li>
                  <NavLink
                    exact
                    className="App-link" 
                    activeClassName="App-link--active"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    className="App-link" 
                    activeClassName="App-link--active"
                    to="/pokemons"
                  >
                    Pokemons
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    className="App-link"
                    activeClassName="App-link--active"
                    to="/no-content"
                  >
                    No content
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <div className="App-content">
            <Route path="/" exact component={Content} />
            <Route path="/pokemons" exact component={Pokemons} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
