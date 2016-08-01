/*
 *
 * Pokemon
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

const { View, Text, Image } = ReactNative;

class Pokemon extends Component {
  render() {
    const { image, name, number } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: image }}
          style={{ height: 40, width: 40 }}
        />
        <Text>{name} - #{number}</Text>
      </View>
    );
  }
}

Pokemon.propTypes = {
  image: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  number: React.PropTypes.string.isRequired,
};

export default Pokemon;
