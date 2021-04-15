var member = 0
export default function buttonEvent(e) {
  var display = document.querySelector('.calculator__display')
  var target = e.target
  console.log(member)
  if (!Number.isNaN(+target.textContent)) {
    if (display.textContent === '0') display.textContent = ''
    display.textContent += target.textContent
  }

  else {
    switch (target.textContent) {
      case '+':
        member += +display.textContent
        display.textContent = '0'
        break
      case '-':
        member -= +display.textContent
        display.textContent = '0'
        break
      case '×':
        member *= +display.textContent
        display.textContent = '0'
        break
      case '/':
        member /= +display.textContent
        display.textContent = '0'
        break
      case '=':
        member += +display.textContent
        display.textContent = member
        member = 0
        break
      default: member
    }
  }

}