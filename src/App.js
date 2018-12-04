import React, { Component } from 'react';
import logo from './unimo-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edita <code>src/App.js</code> e salva per aggiornare la pagina.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            More on React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
