import configureStore from 'redux-mock-store';

const mockStore = configureStore();
export const store = mockStore({
  form: {
    name: '',
    age: '',
    phone: '',
    email: '',
    company: '',
    visible: false,
  },
});
