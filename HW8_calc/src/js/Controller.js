function Controller(simple, engeneer, calcBtns) {
  this.simple = simple;
  this.engeneer = engeneer;
  this.calculatorButtons = document.querySelector(calcBtns);
  this.state = 'simple';

  this.addClass = function (el, className) { el.classList.add(className); };
  this.removeClass = function (el, className) { el.classList.remove(className); };

  this.toggleCalc();
}

Controller.prototype.init = function () {
  if (this.state === 'simple') {
    this.renderSimple();
  }
  else if (this.state === 'engeneer') {
    this.renderEngeneer();
  }
};

Controller.prototype.toggleCalc = function () {
  this.calculatorButtons.addEventListener('click', this.toggleEvent.bind(this));
};

Controller.prototype.toggleEvent = function (e) {
  if (e.target.textContent === '<>') {
    if (this.state === 'simple') {
      this.clear();
      this.state = 'engeneer';
      this.init();
    }
    else if (this.state === 'engeneer') {
      this.clear();
      this.state = 'simple';
      this.init();
    }
  }
};

Controller.prototype.clear = function () {
  const buttons = this.calculatorButtons.querySelectorAll('button');
  buttons.forEach(el => {
    el.remove();
  });
};

Controller.prototype.renderSimple = function () {
  var calcButtons =
    [
      'AC', '+/-', '%', '/',
      7, 8, 9, '*',
      4, 5, 6, '-',
      1, 2, 3, '+',
      '<>', 0, '.', '='
    ];
  this.removeClass(this.calculatorButtons, 'calculator__buttons-eng');
  this.addClass(this.calculatorButtons, 'calculator__buttons-simple');
  for (var i = 0; i < calcButtons.length; i++) {
    var button = document.createElement('button');
    button.addEventListener('click', this.simple.buttonEvent.bind(this.simple));
    button.textContent = calcButtons[i];
    this.addClass(button, 'calculator__btn');
    if ((i + 1) % 4 === 0 || i === calcButtons.length - 1) {
      this.addClass(button, 'left-btn');
    }
    else if (i < 3) {
      this.addClass(button, 'secondary-btn');
    }
    else {
      this.addClass(button, 'main-btn');
    };
    this.calculatorButtons.appendChild(button);
  };
};

Controller.prototype.renderEngeneer = function () {
  var calcButtons =
    [
      '(', ')', '+/-', 'x^2', 'AC', '🠔', '/',
      '10^x', '1/x', '|x|', 7, 8, 9, '*',
      'mod', 'exp', 'e', 4, 5, 6, '-',
      'π', 'n!', '√', 1, 2, 3, '+',
      'x^y', 'log', 'ln', '<>', 0, '.', '='
    ];
  this.removeClass(this.calculatorButtons, 'calculator__buttons-simple');
  this.addClass(this.calculatorButtons, 'calculator__buttons-eng');
  for (var i = 0; i < calcButtons.length; i++) {
    var button = document.createElement('button');
    button.textContent = calcButtons[i];
    button.addEventListener('click', this.engeneer.buttonEvent.bind(this.engeneer));
    this.addClass(button, 'calculator__btn');
    if (calcButtons[i] === '<>') {
      this.addClass(button, 'change');
    }
    if ((i + 1) % 7 === 0 || i === calcButtons.length - 1) {
      this.addClass(button, 'left-btn');
    }
    else if (typeof +button.textContent === 'number' && !Number.isNaN(+button.textContent)) {
      this.addClass(button, 'main-btn');
    }
    else {
      this.addClass(button, 'secondary-btn');
    };
    this.calculatorButtons.appendChild(button);
  };
};

module.exports = Controller;