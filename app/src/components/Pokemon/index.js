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
          source={image}
          style={{ height: 50, width: 50 }}
        />
        <Text>{name} - #{number}</Text>
      </View>
    );
  }
}

Pokemon.propTypes = {
  image: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  number: React.PropTypes.number.isRequired,
};

export default Pokemon;
