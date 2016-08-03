/*
 *
 * PokemonList
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import Pokemon from '../Pokemon';
import { getAllPokemon } from '../../data/pokemon';

const { ListView, Text, TouchableOpacity } = ReactNative;

class PokemonList extends Component {
  render() {
    const { onSelected } = this.props;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const dataSource = ds.cloneWithRows(getAllPokemon());
    return (
      <ListView
        style={styles.container}
        horizontal
        dataSource={dataSource}
        renderRow={
          r => (
            <TouchableOpacity onPress={() => onSelected(r)}>
              <Pokemon image={r.image} name={r.name} number={r.number} />
            </TouchableOpacity>
          )
        }
      />
    );
  }
}

PokemonList.propTypes = {
  onSelected: React.PropTypes.func.isRequired,
};

export default PokemonList;
