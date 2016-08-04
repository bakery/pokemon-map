import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import GraphQLClient from 'parse-graphql-client';
import Settings from '../settings';
import {
  ADD_SIGHTING_REQUEST,
  ADD_SIGHTING_SUCCESS,
  ADD_SIGHTING_ERROR,
} from '../components/AddSighting/constants';

const settings = Settings.load();
// eslint-disable-next-line global-require
const client = new GraphQLClient(settings.graphqlURL, require('parse/react-native'));

function runMutation({ latitude, longitude, pokemonId }) {
  console.log('running mutation', latitude, longitude, pokemonId);
  return client.mutate(`
    {
      sighting : addSighting(latitude:${latitude}, 
        longitude:${longitude}, pokemon_id:${pokemonId}) {
        id, latitude, longitude, pokemon_id
      }
    }
  `);
}

function* runAddSighting(action) {
  try {
    const response = yield call(runMutation, {
      latitude: action.payload.location.latitude,
      longitude: action.payload.location.longitude,
      pokemonId: action.payload.pokemon.number,
    });
    yield put({
      type: ADD_SIGHTING_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: ADD_SIGHTING_ERROR,
      payload: {
        error,
      },
    });
  }
}

export function* addSighting() {
  yield* takeEvery(ADD_SIGHTING_REQUEST, runAddSighting);
}
