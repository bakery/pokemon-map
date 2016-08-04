import { takeEvery } from 'redux-saga';
import { call } from 'redux-saga/effects';
import { authenticate as authenticateUser } from '../lib/authentication';
import { MAP_MOUNTED_AND_RENDERED } from '../components/Map/constants';

function* runAuthenticate() {
  yield call(authenticateUser);
}

export function* authenticate() {
  yield* takeEvery(MAP_MOUNTED_AND_RENDERED, runAuthenticate);
}
