import * as AT from './actionTypes';

export const setPrimary = (valueType, value) => ({ type: AT.PRIMARY_CHANGE, valueType, value });
export const setSecondary = (valueType, value) => ({ type: AT.SECONDARY_CHANGE, valueType, value });
export const setInputValue = (valueType, value) => ({ type: AT.SET_INPUT_VALUE, valueType, value });
export const setConvert = (valueType, value) => ({ type: AT.SET_CONVERT, valueType, value });

export const getCurrency = () => ({ type: AT.GET_CURRENCY });
