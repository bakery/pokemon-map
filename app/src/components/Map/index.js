/*
 *
 * Map
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectMap } from './reducer';
// XX: https://github.com/lelandrichardson/react-native-maps
import MapView from 'react-native-maps';

import { getPokemonsInArea } from './actions';

const { Dimensions } = ReactNative;
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export class Map extends Component {
  constructor(props) {
    super(props);
    this.grabMapRef = this.grabMapRef.bind(this);
    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);

    this.region = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const initialPosition = JSON.stringify(position);
        console.log('position is', position);
        this.setState({
          initialPosition,
        });
        this.map.animateToRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
      },
      (error) => alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      }
    );
    // XX: watch position
    // this.watchID = navigator.geolocation.watchPosition((position) => {
    //   var lastPosition = JSON.stringify(position);
    //   this.setState({lastPosition});
    // });
  }

  onRegionChangeComplete(region) {
    const { dispatch } = this.props;

    this.region = region;

    console.log('onRegionChangeComplete',
      `center_latitude: ${region.latitude}`,
      `center_longitude: ${region.longitude}`,
      `northeast_latitude: ${region.latitude + region.latitudeDelta / 2}`,
      `northeast_longitude: ${region.longitude + region.longitudeDelta / 2}`,
      `southwest_latitude: ${region.latitude - region.latitudeDelta / 2}`,
      `southwest_longitude: ${region.longitude - region.latitudeDelta / 2}`
    );

    dispatch(getPokemonsInArea({
      center_latitude: region.latitude,
      center_longitude: region.longitude,
      northeast_latitude: region.latitude + region.latitudeDelta / 2,
      northeast_longitude: region.longitude + region.longitudeDelta / 2,
      southwest_latitude: region.latitude - region.latitudeDelta / 2,
      southwest_longitude: region.longitude - region.latitudeDelta / 2,
    }));
  }

  grabMapRef(component) {
    this.map = component;
  }

  render() {
    const { map } = this.props;
    console.log('sightings', map.get('sightings'));
    const markers = map.get('sightings').map((s) => (
      <MapView.Marker
        coordinate={{
          latitude: s.latitude,
          longitude: s.longitude,
        }}
        key={s.id}
        title={s.pokemon.name}
        description={s.pokemon.name}
        image={{ uri: s.pokemon.marker_url }}
        style={{ width: 40 }}
      />
    ));

    [
      {
        latitude: this.region.latitude,
        longitude: this.region.longitude,
        title: 'Center',
      },

      {
        latitude: this.region.latitude + this.region.latitudeDelta / 2,
        longitude: this.region.longitude + this.region.longitudeDelta / 2,
        title: 'North Easts',
      },

      {
        latitude: this.region.latitude - this.region.latitudeDelta / 2,
        longitude: this.region.longitude - this.region.latitudeDelta / 2,
        title: 'South Wests',
      },
    ].forEach(l => {
      markers.push(
        <MapView.Marker
          coordinate={{
            latitude: l.latitude,
            longitude: l.longitude,
          }}
          title={l.title}
          description={l.title}
        />
      );
    });

    return (
      <MapView
        initialRegion={this.region}
        ref={this.grabMapRef}
        style={styles.mapStyle}
        onRegionChangeComplete={this.onRegionChangeComplete}
      >
      {markers}
      </MapView>
    );
  }
}

Map.propTypes = {
  map: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  createSelector(selectMap, (map) => ({ map })),
  mapDispatchToProps
)(Map);
