import { select, call, put, takeEvery } from 'redux-saga/effects';
import * as AT from './actionTypes';
import { allIpt } from './selectors';
import { requests, url } from '../helpers';
import { setPersons, setVisible } from './actions';

export function* getPersonSaga() {
  const response = yield call(fetch, url);
  const data = yield response.json();
  yield put(setPersons(data.message));
}

export function* postPersonSaga() {
  const body = yield select(allIpt);
  const response = yield call(requests.postRequest, url, body);
  const data = yield response.json();
  yield put(setPersons(data.message));
  yield put(setVisible(false));
}

export function* watcher() {
  yield takeEvery(AT.GET_PERSONS_REQUEST, getPersonSaga);
  yield takeEvery(AT.POST_PERSON_REQUEST, postPersonSaga);
}
