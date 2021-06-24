import * as AT from './actionTypes';

export const setPersons = (persons) => ({ type: AT.SET_PERSONS, persons });
export const setVisible = (isVisible) => ({ type: AT.SET_VISIBLE, isVisible });
export const setInputValue = (field, value) => ({ type: AT.SET_INPUT_VALUE, field, value });

export const getPerson = () => ({ type: AT.GET_PERSONS_REQUEST });
export const postPerson = () => ({ type: AT.POST_PERSON_REQUEST });
