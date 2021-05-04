function Simple({ calcBtns, display, values }) {
  this.calculatorButtons = document.querySelector(calcBtns);
  this.display = document.querySelector(display);
  this.values = document.querySelector(values);

  this.memory = '0';
  this.current = '0';
  this.sign = null;

  this.addClass = function (el, className) { el.classList.add(className); };
  this.removeClass = function (el, className) { el.classList.remove(className); };
  this.setDisplay = function (target = this.current) { this.display.textContent = target; };
}

Simple.prototype.buttonEvent = function (e) {
  var
    displayContent = this.display.textContent,
    targetContent = e.target.textContent;

  if (targetContent === '.') {
    if (displayContent.includes('.')) return;
    this.current += targetContent;
    this.setDisplay();
  }
  else if (this.current === '0' && !Number.isNaN(+targetContent)) {
    this.current = targetContent;
    this.setDisplay();
  }
  else if (typeof targetContent === 'number' || !Number.isNaN(+targetContent)) {
    this.current += targetContent;
    this.setDisplay();
  }
  else if (targetContent === '+/-') {
    if (this.current === '0') {
      this.current = (+this.memory * -1).toString();
      this.setDisplay();
    }
    else {
      this.current = (+this.current * -1).toString();
      this.setDisplay();
    }
  }
  else if (targetContent === '%') {
    if (this.current !== '0') {
      this.percent();
    }
  }
  else if (targetContent === '=') {
    this.memory = eval(this.memory + this.sign + this.current);
    this.values.textContent = this.memory;
    this.setDisplay(this.memory);
    this.current = this.memory;
    this.memory = '0';
    this.sign = null;
  }
  else if (targetContent === 'AC') {
    this.setDisplay(0);
    this.values.textContent = 0;
    this.reset();
    return;
  }
  else if (targetContent === '<>') {
    this.renderEngeneer();
  }
  this.operation(targetContent);
};

Simple.prototype.reset = function () {
  this.memory = '0';
  this.current = '0';
  this.sign = null;
};

Simple.prototype.operationHelper = function (sign) {
  this.sign = sign;
  this.memory = this.current;
  this.current = '0';
  this.values.textContent = this.memory + this.sign;
};

Simple.prototype.operation = function (sign) {
  ['+', '-', '*', '/'].forEach(function (el) {
    if (el === sign) {
      if (this.sign !== null) {
        this.current = eval(this.memory + this.sign + this.current);
        this.setDisplay();
        this.operationHelper(sign);
      }
      else {
        this.operationHelper(sign);
      }
    }
  }.bind(this));
};

Simple.prototype.percent = function () {
  if (this.sign === '+' || this.sign === '-') {
    this.current = (+this.memory / 100 * this.current).toString();
    this.setDisplay();
  }
  else {
    this.current = (+this.memory / 100).toString();
    this.setDisplay();
  }
};

Simple.prototype.render = function () {
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
    button.addEventListener('click', this.buttonEvent.bind(this));
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

export default Simple;