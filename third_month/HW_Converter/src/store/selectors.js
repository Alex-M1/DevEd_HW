import { createSelector } from 'reselect';

export const getData = (state) => state;
export const getInputValue = createSelector(
  getData,
  (_state, type) => type,
  (state, type) => state[type].inputValue,
);
export const getResultValue = createSelector(
  getData,
  (_state, type) => type,
  (state, type) => state[type].resultValue,
);

export const getPrimaryValue = createSelector(
  getData,
  (_state, type) => type,
  (state, type) => state[type].primary,
);

export const getSecondaryValue = createSelector(
  getData,
  (_state, type) => type,
  (state, type) => state[type].secondary,
);
