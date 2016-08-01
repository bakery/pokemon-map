/*
 *
 * PokemonSelector
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import PokemonList from '../PokemonList';

const { View, Text } = ReactNative;

class PokemonSelector extends Component {
  constructor(props) {
    super(props);
    this.onPokemonSelected = this.onPokemonSelected.bind(this);
  }

  onPokemonSelected(pokemon) {
    const { onSelected } = this.props;
    onSelected(pokemon);
    this.setState({
      selectedPokemon: pokemon,
    });
  }

  render() {
    const selectedPokemon = this.state && this.state.selectedPokemon;

    if (selectedPokemon) {
      return (
        <View style={styles.container}>
          <Text>{selectedPokemon.name}</Text>
        </View>
      );
    }

    return <PokemonList onSelected={this.onPokemonSelected} />;
  }
}

PokemonSelector.propTypes = {
  onSelected: React.PropTypes.func.isRequired,
};

export default PokemonSelector;
