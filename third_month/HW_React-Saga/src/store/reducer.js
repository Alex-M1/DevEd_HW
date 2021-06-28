import { SET_PERSONS, SET_INPUT_VALUE, SET_VISIBLE } from './actionTypes';

export const initialState = {
  form: {
    name: '',
    age: '',
    phone: '',
    email: '',
    company: '',
    visible: false,
  },
  persons: [{
    name: '',
    age: '',
    phone: '',
    email: '',
    company: '',
  }],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERSONS:
      return {
        ...state,
        persons: action.persons,
      };
    case SET_INPUT_VALUE:
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.value,
        },
      };
    case SET_VISIBLE:
      return {
        ...state,
        form: {
          ...state.form,
          visible: action.isVisible,
        },
      };
    default: return state;
  }
};
export default reducer;
