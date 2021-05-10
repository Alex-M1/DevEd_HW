import Candidate from './js/Candidate';
import { inputSelectors } from './js/constants';
import Race from './js/Race';
import './style/index.scss';

window.addEventListener('DOMContentLoaded', () => {
  const raceSelectors = {
    createSelector: '.candidate',
    controlSelector: '.control-panel'
  };

  const race = new Race({ ...raceSelectors, inputSelectors, Candidate });
  console.log(race);
});