import { call, put, takeEvery } from 'redux-saga/effects';
import * as AT from './actionTypes';
import { setConvert } from './actions';
import { getRequest } from '../helpers/getRequest';

export function* getCurrency() {
  const response = yield call(getRequest, '/src/helpers/currency.json');
  const data = yield call([response, 'json']);
  yield put(setConvert('currency', data));
}
export function* watcher() {
  yield takeEvery(AT.GET_CURRENCY, getCurrency);
}
