import { createSelector } from 'reselect';

export const getStore = (state) => state;

export const iptValue = createSelector(
  getStore,
  (_state, type) => type,
  (state, type) => state.form[type],
);

export const allIpt = createSelector(
  getStore,
  (state) => {
    const { visible, ...ipts } = state.form;
    return ipts;
  },
);

export const modalVisible = createSelector(
  getStore,
  (state) => state.form.visible,
);

export const persons = createSelector(
  getStore,
  (state) => state.persons,
);
