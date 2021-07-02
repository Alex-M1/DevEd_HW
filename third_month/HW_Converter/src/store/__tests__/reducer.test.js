import { initialState, reducer } from '../reducer';
import * as actions from '../actions';
import * as AT from '../actionTypes';

describe('reducer', () => {
  it(`${AT.PRIMARY_CHANGE} && type length`, () => {
    expect(reducer(initialState, actions.setPrimary('length', '1')))
      .toEqual({
        ...initialState,
        length: {
          ...initialState.length,
          primary: '1',
        },
      });
  });
  it(`${AT.PRIMARY_CHANGE} && type currency`, () => {
    expect(reducer(initialState, actions.setPrimary('currency', '1')))
      .toEqual({
        ...initialState,
        currency: {
          ...initialState.currency,
          primary: '1',
        },
      });
  });
  it(`${AT.SECONDARY_CHANGE} && type length`, () => {
    expect(reducer(initialState, actions.setSecondary('length', '1')))
      .toEqual({
        ...initialState,
        length: {
          ...initialState.length,
          secondary: '1',
        },
      });
  });
  it(`${AT.SECONDARY_CHANGE} && type currency`, () => {
    expect(reducer(initialState, actions.setSecondary('currency', '1')))
      .toEqual({
        ...initialState,
        currency: {
          ...initialState.currency,
          secondary: '1',
        },
      });
  });
  it(`${AT.SET_INPUT_VALUE} && type length`, () => {
    expect(reducer(initialState, actions.setInputValue('length', '1')))
      .toEqual({
        ...initialState,
        length: {
          ...initialState.length,
          inputValue: '1',
        },
      });
  });
  it(`${AT.SET_INPUT_VALUE} && type currency`, () => {
    expect(reducer(initialState, actions.setInputValue('currency', '1')))
      .toEqual({
        ...initialState,
        currency: {
          ...initialState.currency,
          inputValue: '1',
        },
      });
  });
});
