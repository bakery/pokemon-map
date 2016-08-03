/*
 *
 * SightingForm
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import MapView from 'react-native-maps';
import PokemonSelector from '../PokemonSelector';

const { View, Text, Dimensions, TouchableOpacity } = ReactNative;
const { width, height } = Dimensions.get('window');
const mapHeight = 200;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class SightingForm extends Component {
  constructor(props) {
    super(props);
    this.grabMapRef = this.grabMapRef.bind(this);
    this.onPositionSelected = this.onPositionSelected.bind(this);
    this.onPokemonSelected = this.onPokemonSelected.bind(this);
    this.checkIfFormIsReady = this.checkIfFormIsReady.bind(this);

    this.formData = {};
  }

  getFormData() {
    return this.formData;
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          currentPosition: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
        });
        this.formData.selectedLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
      },
      (error) => alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      }
    );
  }

  grabMapRef(component) {
    this.map = component;
  }

  onPositionSelected(e) {
    this.formData.selectedLocation = e.nativeEvent.coordinate;
    this.checkIfFormIsReady();
  }

  onPokemonSelected(pokemon) {
    this.formData.selectedPokemon = pokemon;
    this.checkIfFormIsReady();
  }

  checkIfFormIsReady() {
    const { onReady } = this.props;

    onReady(
      (typeof this.formData.selectedLocation !== 'undefined') &&
      (typeof this.formData.selectedPokemon !== 'undefined')
    );
  }

  render() {
    const currentPosition = this.state && this.state.currentPosition;
    const selectedPokemon = this.state && this.state.selectedPokemon;

    // position: 'absolute', left: 0, bottom: 0, height: mapHeight, width
    const mapComponent = currentPosition ? (
      <MapView
        initialRegion={currentPosition}
        ref={this.grabMapRef}
        style={{ flex: 2 }}
        showsUserLocation
      >
        <MapView.Marker
          coordinate={{ latitude: currentPosition.latitude, longitude: currentPosition.longitude }}
          onDragEnd={this.onPositionSelected}
          draggable
        />
      </MapView>
    ) : (<Text>Getting current location...</Text>);

    const submitSightingButton = selectedPokemon ? (
      <TouchableOpacity>
        <Text style={{ backgroundColor: 'yellow' }}>Submit sighting</Text>
      </TouchableOpacity>
    ) : null;

    return (
      <View style={styles.container}>
        <PokemonSelector onSelected={this.onPokemonSelected} style={{ marginBottom: mapHeight, marginTop: 100 }} />
        {submitSightingButton}
        {mapComponent}
      </View>
    );
  }
}

SightingForm.propTypes = {
  onReady: React.PropTypes.func.isRequired,
};

export default SightingForm;
