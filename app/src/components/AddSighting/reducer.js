/*
 *
 * AddSighting reducer
 *
 */

import { DEFAULT_ACTION } from './constants';

function addSighting(state = {}, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default addSighting;


export function selectAddSighting(state) {
  return state.get('addSighting');
}
