import { testSaga } from 'redux-saga-test-plan';
import { watcher, getCurrency } from '../sagas';
import * as AT from '../actionTypes';
import { setConvert } from '../actions';
import { getRequest } from '../../helpers/getRequest';

describe('getPersonSaga', () => {
  let res;
  let data;
  beforeEach(() => {
    res = { json: jest.fn() };
    data = [{}];
  });
  it('should call getPersonSaga', () => {
    const action = {
      type: AT.GET_CURRENCY,
    };
    testSaga(getCurrency, action)
      .next()
      .call(getRequest, '/src/helpers/currency.json')
      .next(res)
      .call([res, 'json'])
      .next(data)
      .put(setConvert('currency', data))
      .next()
      .isDone();
  });
});
describe('watcher', () => {
  it('should run all sagas', () => {
    testSaga(watcher)
      .next()
      .takeEvery(AT.GET_CURRENCY, getCurrency)
      .next()
      .isDone();
  });
});
