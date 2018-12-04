import React, { Component } from 'react';
import PokemonList from '../Pokemon/List';

const getIds = (search) => search.replace('?selected=', '').split(',')

class Pokemons extends Component {
  state = {
    selectedPokemons: null
  }

  componentWillMount() {
    const { location } = this.props
    if(location.search) {
      this.setState({
        selectedPokemons: getIds(location.search)
      })
    }
  }
  onSelectList = (list) => {
    const { history, location } = this.props
    history.push({
      pathname: location.pathname,
      search: `selected=${list.toString()}`
    })
  }

  render() {
    const { selectedPokemons = [] } = this.state
    return(
      <div>
        <PokemonList
          selected={selectedPokemons}
          onSelectList={this.onSelectList}
        />
      </div>
    )
  }
};

export default Pokemons;