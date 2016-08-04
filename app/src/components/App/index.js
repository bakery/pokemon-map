/*
 *
 * App
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import MainNavigation from '../MainNavigation';
import codePush from 'react-native-code-push';

const { View } = ReactNative;

class App extends Component {
  componentDidMount() {
    codePush.sync();
  }

  render() {
    return (
      <View style={styles.container}>
        <MainNavigation />
      </View>
    );
  }
}


export default App;
