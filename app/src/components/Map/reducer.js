/*
 *
 * Map reducer
 *
 */

import { GET_POKEMONS_IN_AREA_SUCCESS } from './constants';
import { fromJS } from 'immutable';

const initialState = {
  sightings: [],
};

function map(state = fromJS(initialState), action) {
  switch (action.type) {
    case GET_POKEMONS_IN_AREA_SUCCESS:
      return state.set('sightings', action.payload.sighting);
    default:
      return state;
  }
}

export default map;


export function selectMap(state) {
  return state.get('map');
}
