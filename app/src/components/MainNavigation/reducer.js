/*
 *
 * MainNavigation reducer
 *
 */

import { cardStackReducer } from 'react-native-navigation-redux-helpers';

const initialState = {
  key: 'mainNavigation',
  index: 0,
  routes: [
    {
      key: 'map',
      index: 0,
    },
  ],
};

const mainNavigation = cardStackReducer(initialState);

export default mainNavigation;


export function selectMainNavigation(state) {
  return state.get('mainNavigation');
}
