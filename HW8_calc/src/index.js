import { Simple, Engeneer, Controller } from './js';
import './styles/styles.scss';

window.addEventListener('DOMContentLoaded', function () {
  var options = {
    values: '.calculator__values',
    calcBtns: '.calculator__buttons',
    display: '.calculator__display',
  };
  var simple = new Simple(options);
  var engeneer = new Engeneer(options);

  var controller = new Controller(simple, engeneer, options.calcBtns);
  controller.init();
});