import React, { Component, Fragment } from 'react'
import Row from '../Layout/Row';
import Box from '../Layout/Box';
import PokemonItem from './Item';
import './List.css';

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min  

class PokemonList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: props.selected || []
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.selected !== this.props.selected) {
      this.setState({
        pokemons: nextProps.selected
      })
    }
  }

  handleClick = () => {
    this.setState({
      pokemons: [
        getRandomNumber(1, 25),
        getRandomNumber(26, 50),
        getRandomNumber(51, 75),
        getRandomNumber(76, 100),
        getRandomNumber(100, 151),
      ]
    }, () => this.props.onSelectList(this.state.pokemons))
  }

  render() {
    const { pokemons } = this.state
    return <Fragment>
      {pokemons.length > 0 &&
        <Row>
          {pokemons.map(item => (
            <Fragment key={item}>
              <Box>
                <PokemonItem id={item} />
              </Box>
            </Fragment>
          ))}
        </Row>
      }
      <Row>
        <button
          className="Pokemon-button"
          onClick={this.handleClick}
        >
          Fammi vedere dei pokemon
        </button>
      </Row>
    </Fragment>
  }
};

export default PokemonList;