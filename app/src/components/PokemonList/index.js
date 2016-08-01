/*
 *
 * PokemonList
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import pokemons from './pokemons';
import Pokemon from '../Pokemon';

const { ListView, Text, TouchableOpacity } = ReactNative;

class PokemonList extends Component {
  render() {
    const { onSelected } = this.props;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const dataSource = ds.cloneWithRows(pokemons);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={
          r => (
            <TouchableOpacity onPress={() => onSelected(r)}>
              <Pokemon image={r.marker_url} name={r.name} number={r.pokenumber.toString()} />
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
