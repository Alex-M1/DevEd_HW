export default class Controller {
  constructor({ Race, View }) {
    this.race = Race;
    this.view = View;
    document.querySelector('.container').addEventListener('click', this.controllerEvent);
  }
  controllerEvent = (e) => {
    const id = e.target.getAttribute('id');
    this.init(id);
  }

  init = (id) => {
    if (id === 'init') {
      this.view.raceInit();
    }
  }
}