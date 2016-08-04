/*
 *
 * AddSightingButton
 *
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

class AddSightingButton extends Component {
  render() {
    const { onNavigate } = this.props;
    const icon = <Icon name="md-eye" size={30} color="#fff" style={{ marginTop: 3 }} />;
    return (
      <ActionButton buttonColor="#ff1c1c" icon={icon} onPress={onNavigate} />
    );
  }
}

AddSightingButton.propTypes = {
  onNavigate: React.PropTypes.func.isRequired,
};

export default AddSightingButton;
