function Engeneer({ calcBtns, display, values }) {
  this.calculatorButtons = document.querySelector(calcBtns);
  this.display = document.querySelector(display);
  this.values = document.querySelector(values);

  this.current = '0';
  this.isNumber = false;

  this.memory = '0';
  this.bracketsQuantity = 0;

  this.setDisplay = function (target = this.current) { this.display.textContent = target; };
  this.setValue = function (value) { this.values.textContent = value; };
  this.setIsNum = function (boolean = true) { this.isNumber = boolean; };
}

Engeneer.prototype.buttonEvent = function (e) {
  var target = e.target.textContent;
  this.addNumbers(target);
  this.setDot(target);
  this.reset(target);
  this.backSpace(target);
  this.abs(target);
  this.fraction(target);
  this.pi(target);
  this.e(target);
  this.factorial(target);
  this.sqrt(target);
  this.log(target);
  this.ln(target);
  this.brackets(target);
  this.pow(target);
  this.setNegative(target);
  this.equal(target);
  this.mathOperations(target);
};

Engeneer.prototype.setDot = function (target) {
  if (target === '.') {
    if (this.display.textContent.includes('.')) return;
    this.current += target;
    this.setDisplay(this.current);
  }
};

Engeneer.prototype.brackets = function (target) {
  if (target === '(') {
    this.bracketsQuantity++;
    this.setValue(this.values.textContent + target);
    this.memory = '0';
  }
  else if (target === ')' && this.bracketsQuantity) {
    this.bracketsQuantity--;
    this.setValue(this.values.textContent + this.display.textContent + target);
    this.memory = this.values.textContent + this.display.textContent + target;
    this.setDisplay(eval(this.values.textContent));
    this.current = ')';
  }
};

Engeneer.prototype.reset = function (target) {
  if (target === 'AC') {
    this.setIsNum(false);
    this.setDisplay('0');
    this.setValue('0');
    this.current = '0';
  }
};

Engeneer.prototype.addNumbers = function (target) {
  var isNan = Number.isNaN(+target);
  if (this.current === '0' && !isNan) {
    this.setIsNum();
    this.current = target;
    this.setDisplay();
  }
  else if (!isNan) {
    this.setIsNum();
    this.current += target;
    this.setDisplay();
  }
};

Engeneer.prototype.pow = function (target) {
  if (!this.display.textContent.includes('^')) {
    if (target === 'x^2') {
      this.current = `${this.current}^2`;
      this.setDisplay(this.current);
    }
    else if (target === 'x^y') {
      this.current = `${this.current}^`;
      this.setDisplay(this.current);
    }
    else if (target === '10^x') {
      if (this.current === '0') {
        this.current = '10^';
        return this.setDisplay(this.current);
      }
      this.current = `10^${this.current}`;
      this.setDisplay(this.current);
    }
  }
};

Engeneer.prototype.backSpace = function (target) {
  var display = this.display.textContent;
  if (target === '🠔') {
    if (display.length === 1) {
      this.current = '0';
      this.setDisplay();
    }
    else {
      this.current = display.substr(0, display.length - 1);
      this.setDisplay();
    }
  }
};

Engeneer.prototype.setNegative = function (target) {
  if (target === '+/-') {
    this.current = -(+this.display.textContent);
    this.setDisplay();
  }
};

Engeneer.prototype.abs = function (target) {
  if (target === '|x|') {
    this.current = `abs(${this.current})`;
    this.setDisplay(this.current);
  }
};

Engeneer.prototype.fraction = function (target) {
  if (target === '1/x') {
    this.current = `1/${this.current}`;
    this.setDisplay(this.current);
  }
};

Engeneer.prototype.pi = function (target) {
  if (target === 'π') {
    this.current = Math.PI;
    this.setDisplay(this.current);
  }
};

Engeneer.prototype.e = function (target) {
  if (target === 'e') {
    this.current = Math.E;
    this.setDisplay(this.current);
  }
};

Engeneer.prototype.factorial = function (target) {
  if (target === 'n!') {
    var fact = 1;
    for (var i = 1; i < +this.current + 1; i++) {
      fact *= i;
    }
    this.setDisplay(fact);
  }
};

Engeneer.prototype.sqrt = function (target) {
  if (target === '√') {
    this.current = Math.sqrt(this.current);
    this.setDisplay(this.current);
  }
};

Engeneer.prototype.log = function (target) {
  if (target === 'log') {
    this.current = Math.log10(this.current);
    this.setDisplay(this.current);
  }
};

Engeneer.prototype.ln = function (target) {
  if (target === 'ln') {
    this.current = Math.log(this.current);
    this.setDisplay(this.current);
  }
};

Engeneer.prototype.equal = function (target) {
  if (target === '=' && this.current !== '0' && !this.bracketsQuantity) {
    this.setDisplay(eval(this.findPow(this.memory) + this.findPow(this.display.textContent)));
    this.setValue(eval(this.findPow(this.values.textContent) + this.findPow(this.current)));
    this.memory = this.values.textContent;
    this.setIsNum(false);
    this.current = '=';
  }
};

Engeneer.prototype.mathOperations = function (sign) {
  ['+', '-', '*', '/', 'mod'].forEach(function (el) {
    if (el === sign) {
      if (this.values.textContent === '0') {
        this.setIsNum(false);
        this.setValue(this.current + sign);
        this.memory = this.values.textContent;
        this.setDisplay(eval(this.findPow(this.display.textContent)));
        this.current = '0';
      }
      else if (this.bracketsQuantity && this.memory === '0') {
        this.setIsNum(false);
        this.current = this.display.textContent;
        this.setDisplay(this.current);
        this.setValue(this.values.textContent + this.current + sign);
        this.memory = this.current + sign;
        this.current = '0';
      }
      else if (this.bracketsQuantity) {
        this.setIsNum(false);
        this.current = this.display.textContent;
        this.setDisplay(eval(this.findPow(this.memory) + this.findPow(this.current)));
        this.setValue(this.values.textContent + this.current + sign);
        this.memory = this.memory + this.current + sign;
        this.current = '0';
      }
      else if (this.current === ')') {
        this.current = this.display.textContent;
        this.setDisplay(eval(this.values.textContent));
        this.setValue(this.values.textContent + sign);
        this.memory = this.values.textContent;
        this.current = '0';
      }
      else if (this.current === '=') {
        this.current = this.display.textContent;
        this.setValue(this.display.textContent + sign);
        this.memory = this.values.textContent;
        this.setDisplay(this.display.textContent);
        this.current = '0';
      }
      else {
        this.setIsNum(false);
        this.current = this.display.textContent;
        this.setDisplay(eval(this.findPow(this.memory) + this.findPow(this.current)));
        this.setValue(this.values.textContent + this.current + sign);
        this.memory = this.values.textContent;
        this.current = '0';
      }
    }
  }.bind(this));
};

Engeneer.prototype.findPow = function (el) {
  return el.replaceAll('^', '**').replaceAll('abs', 'Math.abs').replaceAll('mod', '%');
};

export default Engeneer;