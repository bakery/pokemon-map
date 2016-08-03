/*
 *
 * Map reducer
 *
 */

import {
  GET_POKEMONS_IN_AREA_SUCCESS,
  GET_POKEMONS_IN_AREA_REQUEST,
} from './constants';
import { fromJS } from 'immutable';

const initialState = {
  sightings: [],
  loading: false,
};

const mergeSightings = (currentSightings, newSightings) => {
  const result = [...currentSightings];
  newSightings.forEach(s => {
    const existingSighting = currentSightings.find(cs => s.id === cs.id);
    if (!existingSighting) {
      result.push(s);
    }
  });
  return result;
};

function map(state = fromJS(initialState), action) {
  switch (action.type) {
    case GET_POKEMONS_IN_AREA_REQUEST:
      return state.set('loading', true);
    case GET_POKEMONS_IN_AREA_SUCCESS:
      return state.withMutations(s => {
        s.updateIn(['sightings'], sightings => mergeSightings(sightings, action.payload.sighting));
        s.set('loading', false);
      });
    default:
      return state;
  }
}

export default map;


export function selectMap(state) {
  return state.get('map');
}
