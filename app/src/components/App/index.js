/*
 *
 * App
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import MainNavigation from '../MainNavigation';

const { View } = ReactNative;

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigation />
      </View>
    );
  }
}


export default App;
