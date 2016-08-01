/*
 *
 * AddSightingButton
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

const { View, Text, TouchableOpacity } = ReactNative;

class AddSightingButton extends Component {
  render() {
    const { onNavigate } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onNavigate}>
          <Text style={{ padding: 20, fontSize: 20 }}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AddSightingButton.propTypes = {
  onNavigate: React.PropTypes.func.isRequired,
};

export default AddSightingButton;
