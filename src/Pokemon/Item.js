import React, { Component } from 'react';

class PokemonItem extends Component {
  state = {
    image: null
  }
  componentWillMount() {
    const { id = null } = this.props
    if (id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(x => x.json())
        .then(result => {
          this.setState({
            image: <img
              alt={result.name}
              src={result.sprites.front_default}
            />
          })
        })
        .catch(y => console.error('x', y))
    }
  }

  render() {
    const { image } = this.state
    return <div>
      {image}
    </div>
  }
};

export default PokemonItem;