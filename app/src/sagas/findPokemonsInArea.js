import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
  GET_POKEMONS_IN_AREA_REQUEST,
  GET_POKEMONS_IN_AREA_SUCCESS,
  GET_POKEMONS_IN_AREA_ERROR,
} from '../components/Map/constants';

import { getPokemonNameById } from '../data/pokemon';

// eslint-disable-next-line camelcase, max-len
function getPokemonThruPokeCrew({ center_latitude, center_longitude, northeast_latitude, northeast_longitude, southwest_latitude, southwest_longitude }) {
  // eslint-disable-next-line camelcase
  const url = `https://api.pokecrew.com/api/v1/seens?live=false&minimal=true&center_latitude=${center_latitude}&center_longitude=${center_longitude}&northeast_latitude=${northeast_latitude}&northeast_longitude=${northeast_longitude}&southwest_latitude=${southwest_latitude}&southwest_longitude=${southwest_longitude}`;

  return fetch(url).then(response => {
    const status = response.status;
    const contentType = response.headers.get('content-type');
    if (contentType && status === 200 && contentType.match(/application\/json/ig)) {
      return response.json();
    }

    return [];
  }).then(data => {
    if (data && data.seens) {
      return data.seens.map(s => {
        const pokemonId = parseInt(s.pokemon_id, 10);
        return {
          id: s.id,
          latitude: parseFloat(s.latitude),
          longitude: parseFloat(s.longitude),
          pokemon: {
            pokenumber: parseInt(s.pokemon_id, 10),
            name: getPokemonNameById(pokemonId),
          },
        };
      });
    }

    return [];
  });
}

function runQuery(area) {
  return getPokemonThruPokeCrew(area);
}

function* runFindPokemonsInArea(action) {
  try {
    const response = yield call(runQuery, action.payload.area);
    yield put({
      type: GET_POKEMONS_IN_AREA_SUCCESS,
      payload: {
        sightings: response,
      },
    });
  } catch (error) {
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
