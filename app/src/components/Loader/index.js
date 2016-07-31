/*
 *
 * Loader
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

const { View, Text } = ReactNative;

class Loader extends Component {
  render() {
    return (
      <View style={{ position: 'absolute', left: 30, top: 30 }}>
        <Text style={{ backgroundColor: 'yellow' }}>Loading</Text>
      </View>
    );
  }
}


export default Loader;
