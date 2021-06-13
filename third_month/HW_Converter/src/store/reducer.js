import * as AT from './actionTypes';
import { convert } from '../helpers/convert';

const initialState = {
  length: {
    primary: 'meters',
    secondary: 'meters',
    inputValue: '',
    resultValue: '',
  },
  currency: {
    primary: 'UAH',
    secondary: 'UAH',
    inputValue: '',
    resultValue: '',
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.PRIMARY_CHANGE:
      return {
        ...state,
        [action.valueType]: {
          ...state[action.valueType],
          primary: action.value,
        },
      };
    case AT.SECONDARY_CHANGE:
      return {
        ...state,
        [action.valueType]: {
          ...state[action.valueType],
          secondary: action.value,
        },
      };
    case AT.SET_INPUT_VALUE:
      return {
        ...state,
        [action.valueType]: {
          ...state[action.valueType],
          inputValue: action.value,
        },
      };
    case AT.CONVERT_LENGTH:
      return {
        ...state,
        length: {
          ...state.length,
          resultValue: convert(
            state.length.inputValue,
            state.length.primary,
            state.length.secondary,
          ),
        },
      };
    default:
      return state;
  }
};
