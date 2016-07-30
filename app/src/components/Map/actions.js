/*
 *
 * Map  actions
 *
 */

import {
  GET_POKEMONS_IN_AREA_REQUEST,
  // GET_POKEMONS_IN_AREA_SUCCESS,
  // GET_POKEMONS_IN_AREA_ERROR,
} from './constants';

export function getPokemonsInArea(area) {
  return {
    type: GET_POKEMONS_IN_AREA_REQUEST,
    payload: {
      area,
    },
  };
}
