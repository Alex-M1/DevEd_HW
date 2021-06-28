import reducer, { initialState } from '../reducer';
import * as actions from '../actions';
import { persons } from './reducerHelper';

describe('authReducer', () => {
  it('SET_PERSONS', () => {
    expect(reducer(initialState, actions.setPersons(persons)))
      .toEqual({
        ...initialState,
        persons,
      });
  });
  it('SET_INPUT_VALUE', () => {
    expect(reducer(initialState, actions.setInputValue('name', 'Alex')))
      .toEqual({
        ...initialState,
        form: {
          ...initialState.form,
          name: 'Alex',
        },
      });
  });
  it('SET_VISIBLE', () => {
    expect(reducer(initialState, actions.setVisible(true)))
      .toEqual({
        ...initialState,
        form: {
          ...initialState.form,
          visible: true,
        },
      });
  });
});
