/*
 *
 * PokemonMapMarker
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import { getPokemonById } from '../../data/pokemon';

const { View, Image } = ReactNative;

class PokemonMapMarker extends Component {
  render() {
    const pokemon = getPokemonById(this.props.pokemonId);
    return (
      <View style={styles.container}>
        <Image style={{ width: 40, height: 40 }} source={pokemon.image} />
      </View>
    );
  }
}

PokemonMapMarker.propTypes = {
  pokemonId: React.PropTypes.number.isRequired,
};

export default PokemonMapMarker;
