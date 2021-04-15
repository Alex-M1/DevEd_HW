import buttonEvent from "./buttonEvent"
import support from "./support"

export default function renderButtons(renderSelector) {
  var calcButton = [
    'AC', '+/-', '%', '/',
    7, 8, 9, '×',
    4, 5, 6, '-',
    1, 2, 3, '+',
    '<>', 0, '.', '='
  ]

  var calculatorButtons = document.querySelector(renderSelector)

  for (var i = 0; i < calcButton.length; i++) {
    var button = document.createElement('button')
    button.textContent = calcButton[i]
    support.addClass(button, 'calculator__btn')
    button.addEventListener('click', buttonEvent)
    if ((i + 1) % 4 === 0 || i === calcButton.length - 1) {
      support.addClass(button, 'left-btn')
    }
    else if (i < 3) {
      support.addClass(button, 'secondary-btn')
    }
    else {
      support.addClass(button, 'main-btn')
    }
    calculatorButtons.appendChild(button)
  }
}
