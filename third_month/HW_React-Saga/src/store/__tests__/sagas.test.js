import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { watcher, getPersonSaga, postPersonSaga, updatePersonSaga, deletePersonSaga } from '../sagas';
import * as AT from '../actionTypes';
import { url, requests } from '../../helpers';
import { setPersons, setVisible } from '../actions';
import { allIpt } from '../selectors';

describe('getPersonSaga', () => {
  let res;
  let data;
  beforeEach(() => {
    res = { json: jest.fn() };
    data = {
      message: [{
        name: '',
        age: '',
        phone: '',
        email: '',
        company: '',
      }],
    };
  });
  it('should call getPersonSaga', () => {
    const action = {
      type: AT.GET_PERSONS_REQUEST,
    };
    testSaga(getPersonSaga, action)
      .next()
      .call(requests.getRequest, url)
      .next(res)
      .call([res, 'json'])
      .next(data)
      .put(setPersons(data.message))
      .next()
      .isDone();
  });
  it('should call postPersonSaga', () => {
    const action = {
      type: AT.POST_PERSON_REQUEST,
    };
    testSaga(postPersonSaga, action)
      .next()
      .select(allIpt)
      .next(data.message[0])
      .call(requests.postRequest, url, data.message[0])
      .next(res)
      .call([res, 'json'])
      .next(data)
      .put(setPersons(data.message))
      .next()
      .put(setVisible(false))
      .next()
      .isDone();
  });
  it('should call updatePersonSaga', () => {
    const action = {
      payload: { id: '12', type: '1', value: '123' },
      type: AT.UPDATE_PERSON_REQUEST,
    };
    const { id, type, value } = action.payload;
    testSaga(updatePersonSaga, action)
      .next()
      .call(
        requests.postRequest,
        `${url}?id=${id}`,
        { [type]: value },
        'PUT',
      )
      .next(res)
      .call([res, 'json'])
      .next(data)
      .put(setPersons(data.message))
      .next()
      .isDone();
  });
  it('should call deletePersonSaga', () => {
    const action = {
      id: '12',
      type: AT.DELETE_PERSON_REQUEST,
    };
    const { id } = action;
    testSaga(deletePersonSaga, action)
      .next()
      .call(requests.getRequest, `${url}?id=${id}`, 'DELETE')
      .next(res)
      .call([res, 'json'])
      .next(data)
      .put(setPersons(data.message))
      .next()
      .isDone();
  });
});
describe('watcher', () => {
  it('should run all sagas', () => {
    testSaga(watcher)
      .next()
      .takeEvery(AT.GET_PERSONS_REQUEST, getPersonSaga)
      .next()
      .takeEvery(AT.POST_PERSON_REQUEST, postPersonSaga)
      .next()
      .takeEvery(AT.UPDATE_PERSON_REQUEST, updatePersonSaga)
      .next()
      .takeEvery(AT.DELETE_PERSON_REQUEST, deletePersonSaga)
      .next()
      .isDone();
  });
});
