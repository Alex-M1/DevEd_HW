import { Simple, Engeneer } from './js';
import './styles/styles.scss';

window.addEventListener('DOMContentLoaded', function () {
  var options = {
    values: '.calculator__values',
    calcBtns: '.calculator__buttons',
    display: '.calculator__display',
  };
  var calculator = new Simple(options);
  // calculator.render()
  var engeneer = new Engeneer(options);
  engeneer.render();
});