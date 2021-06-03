import Candidate from './js/Candidate';
import { inputSelectors } from './js/constants';
import Race from './js/Race';
import View from './js/View';
import './style/index.scss';

window.addEventListener('DOMContentLoaded', () => {
  const raceSelectors = {
    createSelector: '.candidate',
    controlSelector: '.control-panel'
  };


  new Race({ ...raceSelectors, inputSelectors, Candidate, View });



});


