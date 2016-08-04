/*
 *
 * PokemonList
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import Pokemon from '../Pokemon';
import SearchBar from 'react-native-search-bar';
import { getAllPokemon } from '../../data/pokemon';

const { ListView, View, TouchableOpacity } = ReactNative;

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.onSearchFilterChanged = this.onSearchFilterChanged.bind(this);
  }

  onSearchFilterChanged(text) {
    this.setState({
      filterText: text,
    });
  }

  filterPokemon(filterText) {
    const allPokemon = getAllPokemon();

    if (!filterText) {
      return allPokemon;
    }

    const re = new RegExp(filterText, 'ig');
    return getAllPokemon().filter(p => re.exec(p.name));
  }

  render() {
    const { onSelected } = this.props;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.number !== r2.number });
    const dataSource = ds.cloneWithRows(
      this.filterPokemon(this.state && this.state.filterText)
    );
    return (
      <View style={{ flexDirection: 'column' }}>
        <SearchBar onChangeText={this.onSearchFilterChanged} placeholder={'Look up pokemon...'} />
        <ListView
          initialListSize={4}
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
      </View>
    );
  }
}

PokemonList.propTypes = {
  onSelected: React.PropTypes.func.isRequired,
};

export default PokemonList;
