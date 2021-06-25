import { select, call, put, takeEvery } from 'redux-saga/effects';
import * as AT from './actionTypes';
import { allIpt } from './selectors';
import { requests, url } from '../helpers';
import { setPersons, setVisible } from './actions';

export function* getPersonSaga() {
  const response = yield call(requests.getRequest, url);
  const data = yield call([response, 'json']);
  yield put(setPersons(data.message));
}

export function* postPersonSaga() {
  const body = yield select(allIpt);
  const response = yield call(requests.postRequest, url, body);
  const data = yield call([response, 'json']);
  yield put(setPersons(data.message));
  yield put(setVisible(false));
}

export function* updatePersonSaga({ payload }) {
  const { id, type, value } = payload;
  const response = yield call(requests.postRequest, `${url}?id=${id}`, { [type]: value }, 'PUT');
  const data = yield call([response, 'json']);
  yield put(setPersons(data.message));
}

export function* deletePersonSaga({ id }) {
  const response = yield call(requests.getRequest, `${url}?id=${id}`, 'DELETE');
  const data = yield call([response, 'json']);
  yield put(setPersons(data.message));
}

export function* watcher() {
  yield takeEvery(AT.GET_PERSONS_REQUEST, getPersonSaga);
  yield takeEvery(AT.POST_PERSON_REQUEST, postPersonSaga);
  yield takeEvery(AT.UPDATE_PERSON_REQUEST, updatePersonSaga);
  yield takeEvery(AT.DELETE_PERSON_REQUEST, deletePersonSaga);
}
