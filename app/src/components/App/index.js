/*
 *
 * App
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import Map from '../Map';

const { View } = ReactNative;

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Map />
      </View>
    );
  }
}


export default App;
