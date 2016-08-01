/*
 *
 * AddSighting
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectAddSighting } from './reducer';
import SightingForm from '../SightingForm';
import { addSighting } from './actions';

const { View, Text, TouchableOpacity } = ReactNative;

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
    const { dispatch } = this.props;
    const { selectedLocation, selectedPokemon } = this.form.getFormData();
    console.log('form data', this.form.getFormData());
    dispatch(addSighting(selectedLocation, selectedPokemon));
  }

  render() {
    const { onDismiss } = this.props;
    const canSubmit = this.state && this.state.canSubmit;

    const submitButton = canSubmit ? (
      <TouchableOpacity onPress={this.onSubmit}>
        <Text style={{ backgroundColor: 'yellow', padding: 10 }}>Submit</Text>
      </TouchableOpacity>
    ) : null;

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          {submitButton}
          <TouchableOpacity onPress={onDismiss}>
            <Text style={{ backgroundColor: 'yellow', padding: 10 }}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <SightingForm ref={this.grabFormRef} onReady={this.onFormReady} />
        </View>
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
