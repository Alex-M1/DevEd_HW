function Engeneer({ calcBtns, display, values }) {
  this.calculatorButtons = document.querySelector(calcBtns);
  this.display = document.querySelector(display);
  this.values = document.querySelector(values);

  this.current = '0';
  this.isNumber = false;
  this.memory = '0';

  this.addClass = function (el, className) { el.classList.add(className); };
  this.removeClass = function (el, className) { el.classList.remove(className); };
  this.setDisplay = function (target = this.current) { this.display.textContent = target; };
  this.setValue = function (value) { this.values.textContent = value; };
  this.setIsNum = function (boolean = true) { this.isNumber = boolean; };
}
//!!!!!setIsNum - ничего не делает!!!!!!


Engeneer.prototype.buttonEvent = function (e) {
  var target = e.target.textContent;
  this.addNumbers(target);
  this.reset(target);
  this.backSpace(target);
  this.pow(target);
  this.setNegative(target);
  this.equal(target);
  this.mathOperations(target);
};

Engeneer.prototype.brackets = function (target) {

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

Engeneer.prototype.equal = function (target) {
  if (target === '=' && this.current !== '0') {
    this.setDisplay(eval(this.findPow(this.values.textContent) + this.findPow(this.display.textContent)));
    this.setValue(eval(this.findPow(this.values.textContent) + this.findPow(this.current)));
    this.setIsNum(false);
    this.current = '=';
  }
};

Engeneer.prototype.mathOperations = function (sign) {
  ['+', '-', '*', '/'].forEach(function (el) {
    if (el === sign) {
      if (this.values.textContent === '0') {
        this.setIsNum(false);
        this.setValue(this.current + sign);
        this.setDisplay(eval(this.findPow(this.display.textContent)));
        this.current = '0';
      }
      else if (this.current === '=') {
        this.current = this.display.textContent;
        this.setValue(this.display.textContent + sign);
        this.setDisplay(this.display.textContent);
        this.current = '0';
      }
      else {
        this.setIsNum(false);
        this.current = this.display.textContent;
        this.setDisplay(eval(this.findPow(this.values.textContent) + this.findPow(this.current)));
        this.setValue(this.values.textContent + this.current + sign);
        this.current = '0';
      }
    }
  }.bind(this));
};

Engeneer.prototype.findPow = function (el) {
  return el.replaceAll('^', '**');
};

Engeneer.prototype.render = function () {
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
    button.addEventListener('click', this.buttonEvent.bind(this));
    this.addClass(button, 'calculator__btn');
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

export default Engeneer;


// Engeneer.prototype.buttonEvent = function (e) {
//   var
//     target = e.target.textContent,
//     display = this.display.textContent,
//     values = this.values.textContent;

//   if (target === '.') {
//     if (display.includes('.')) return;
//     this.display.textContent += target;
//   }
//   else if (display === '0' && !Number.isNaN(+target)) {
//     this.display.textContent = target;
//     this.current = target;
//   }
//   else if (typeof +target === 'number' && !Number.isNaN(+target)) {
//     this.isNumber = true;
//     this.display.textContent += target;
//     this.current = target;
//   }
//   else if (target === '=') {
//     this.isNumber = true;
//     this.display.textContent = eval(values + display);
//     this.values.textContent = eval(values + display);
//   }
//   else if (target === 'AC') {
//     this.isNumber = true;
//     this.display.textContent = 0;
//   }
//   else if (target === '🠔') {
//     display.length === 1
//       ? this.setDisplay('0')
//       : this.setDisplay(display.substr(0, display.length - 1));
//   }
//   else if (target === '+/-') {
//     this.current = -(+this.current);
//     this.setDisplay();
//   }

//   this.operations(target)
// }

// Engeneer.prototype.operations = function (target) {
//   ['+', '-', '*', '/'].forEach(function (el) {
//     if (el === target) {
//       if (this.values !== '0') {
//         this.isNumber = false;
//         this.values.textContent += this.current + target;
//         this.setDisplay(eval(this.values.textContent))
//         this.current = '0'
//       }
//     }
//   }.bind(this))
// }