import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import GraphQLClient from 'parse-graphql-client';
import Settings from '../settings';
import {
  GET_POKEMONS_IN_AREA_REQUEST,
  GET_POKEMONS_IN_AREA_SUCCESS,
  GET_POKEMONS_IN_AREA_ERROR,
} from '../components/Map/constants';

const settings = Settings.load();
// eslint-disable-next-line global-require
const client = new GraphQLClient(settings.graphqlURL, require('parse/react-native'));

function runQuery(area) {
  console.log('running query in area', area, settings.graphqlURL);
  // XX: replace example query with your target model
  return client.query(`
    {
      sighting(
        center_latitude: ${area.center_latitude},
        center_longitude: ${area.center_longitude},
        northeast_latitude: ${area.northeast_latitude},
        northeast_longitude: ${area.northeast_longitude},
        southwest_latitude: ${area.southwest_latitude},
        southwest_longitude: ${area.southwest_longitude}
      ) {
        id, latitude, longitude, pokemon {
          name, marker_url
        }
      }
    }
  `);
}

function* runFindPokemonsInArea(action) {
  try {
    const response = yield call(runQuery, action.payload.area);
    yield put({
      type: GET_POKEMONS_IN_AREA_SUCCESS,
      payload: response,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: GET_POKEMONS_IN_AREA_ERROR,
      payload: {
        error,
      },
    });
  }
}

export function* findPokemonsInArea() {
  yield* takeEvery(GET_POKEMONS_IN_AREA_REQUEST, runFindPokemonsInArea);
}
