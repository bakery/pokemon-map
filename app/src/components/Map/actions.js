/*
 *
 * Map  actions
 *
 */

import {
  GET_POKEMONS_IN_AREA_REQUEST,
  MAP_MOUNTED_AND_RENDERED,
} from './constants';

export function getPokemonsInArea(area) {
  return {
    type: GET_POKEMONS_IN_AREA_REQUEST,
    payload: {
      area,
    },
  };
}

export function reportMapReady() {
  return {
    type: MAP_MOUNTED_AND_RENDERED,
  };
}
