function Controller(simple, engeneer) {
  this.simple = simple;
  this.engeneer = engeneer;

  this.state = 'simple';
}

Controller.prototype.init = function () {
  const change = document.querySelector('.calculator__buttons');
  change.addEventListener('click', () => {
    if (this.state === 'simple') {
      this.simple.render();
    }
  });
};