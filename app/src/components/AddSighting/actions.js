/*
 *
 * AddSighting  actions
 *
 */

import {
  ADD_SIGHTING_REQUEST,
} from './constants';

export function addSighting(location, pokemon) {
  return {
    type: ADD_SIGHTING_REQUEST,
    payload: {
      location,
      pokemon,
    },
  };
}
