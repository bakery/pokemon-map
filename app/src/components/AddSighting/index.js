/*
 *
 * AddSighting
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectAddSighting } from './reducer';
import SightingForm from '../SightingForm';
import { addSighting as addSightingAction } from './actions';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

const { View } = ReactNative;

export class AddSighting extends Component {
  constructor(props) {
    super(props);
    this.onFormReady = this.onFormReady.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.grabFormRef = this.grabFormRef.bind(this);
  }

  grabFormRef(component) {
    this.form = component;
  }

  onFormReady(ready) {
    console.log('onReady', ready);
    this.setState({
      canSubmit: ready,
    });
  }

  onSubmit() {
    const { dispatch, onDismiss } = this.props;
    const { selectedLocation, selectedPokemon } = this.form.getFormData();
    console.log('form data', this.form.getFormData());
    dispatch(addSightingAction(selectedLocation, selectedPokemon));
    onDismiss();
  }

  render() {
    const canSubmit = this.state && this.state.canSubmit;
    const icon = <Icon name="md-add" size={30} color="#fff" style={{ marginTop: 3 }} />;

    const submitButton = canSubmit ? (
      <ActionButton buttonColor="#ff1c1c" icon={icon} onPress={this.onSubmit} />
    ) : null;

    return (
      <View style={{ flex: 1, paddingTop: 63 }}>
        <SightingForm ref={this.grabFormRef} onReady={this.onFormReady} />
        {submitButton}
      </View>
    );
  }
}

AddSighting.propTypes = {
  addSighting: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  onDismiss: React.PropTypes.func.isRequired,
};
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  createSelector(selectAddSighting, (addSighting) => ({ addSighting })),
  mapDispatchToProps
)(AddSighting);
