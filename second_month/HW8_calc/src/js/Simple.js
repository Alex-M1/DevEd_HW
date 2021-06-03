function Simple({ calcBtns, display, values }) {
  this.calculatorButtons = document.querySelector(calcBtns);
  this.display = document.querySelector(display);
  this.values = document.querySelector(values);

  this.memory = '0';
  this.current = '0';
  this.sign = null;

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

export default Simple;