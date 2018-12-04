import React, { Component } from 'react';
import PokemonList from './Pokemon/List';
import Row from './Layout/Row';
import Box from './Layout/Box';
import logo from './unimo-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-content">
          <Row>
            <Box>
              Il mio contenuto
            </Box>
            <Box>
              Il secondo contenuto
            </Box>
            <Box>
              Il terzo contenuto
            </Box>
          </Row>
          <PokemonList />
        </div>
      </div>
    );
  }
}

export default App;
