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

// XX: custom codepush experience
// codePush.sync({ updateDialog: true }, (status) => {
//     switch(status) {
//       case codePush.SyncStatus.UP_TO_DATE:
//         this.setState({
//           debugInfo: 'All up to date',
//         });
//         break;
//       case codePush.SyncStatus.DOWNLOADING_PACKAGE:
//         this.setState({
//           debugInfo: 'downloading update...',
//         });
//         break;
//       case codePush.SyncStatus.INSTALLING_UPDATE:
//         // Hide "downloading" modal
//         break;
//       case codePush.SyncStatus.UPDATE_INSTALLED:
//         this.setState({
//           debugInfo: 'update installed! restart to activate',
//         });
//         break;
//     }
//   }, ({ receivedBytes, totalBytes }) => {
//     this.setState({
//       debugInfo: `dwnlding ${receivedBytes / 1000}/${totalBytes / 10000}`,
//     });
//   }
// );

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
