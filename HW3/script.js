var forms = document.querySelectorAll('form')

//game elements
var enteredNumber = document.querySelector('.entered-number'),
  generateBtn = document.querySelector('.generate'),
  exit = document.querySelector('.exit'),
  out = document.querySelector('.out')

//settings elements
var attemptsIpt = document.querySelector('.attempts'),
  minNumberIpt = document.querySelector('.min-number'),
  maxNumberIpt = document.querySelector('.max-number'),
  settingBtn = document.querySelector('.settings-btn'),
  log = document.querySelector('.log')

//span elements
var minSpan = document.querySelector('.min-span'),
  maxSpan = document.querySelector('.max-span'),
  attemptsSpan = document.querySelector('.attempts-span')

//general variables
var attempts = 5,
  minNumber = 0,
  maxNumber = 100,
  randomNumber = Math.round(Math.random() * (maxNumber - minNumber) + minNumber)

for (var i = 0; i < forms.length; i++) {
  forms[i].addEventListener('submit', function (e) {
    e.preventDefault()
  })
}


var attemptsCount = attempts
generateBtn.addEventListener('click', function () {
  var enterVal = +enteredNumber.value
  if (!enterVal) return
  attemptsCount--
  if (+enterVal > randomNumber) {
    out.textContent = 'Число меньше. Осталось попыток: ' + attemptsCount
  } else if (+enterVal < randomNumber) {
    out.textContent = 'Число больше. Осталось попыток: ' + attemptsCount
  } else if (+enterVal === randomNumber) {
    winOrLoose('win', attemptsCount)
  } else if (attemptsCount === 0) {
    winOrLoose('loose', attemptsCount)
  }

  if (attemptsCount !== attempts) {
    this.textContent = 'Еще!'
    settingBtn.disabled = true
  }
  enteredNumber.value = ''
})

exit.addEventListener('click', function () {
  enteredNumber.value = ''
  attemptsCount = attempts
  out.textContent = ''
  settingBtn.disabled = false
})

settingBtn.addEventListener('click', function () {
  var minIptVal = minNumberIpt.value,
    maxIptVal = maxNumberIpt.value,
    attemptsVal = attemptsIpt.value

  if (+minIptVal > +maxIptVal || +minIptVal === +maxIptVal
    || +minIptVal > maxNumber || +minIptVal === maxNumber
    || minNumber > +maxIptVal || minNumber === +maxIptVal) {
    return log.textContent = 'Минимальное число должно быть меньше'
  }

  if (minIptVal) {
    minNumber = +minIptVal
  }
  if (maxIptVal) maxNumber = +maxIptVal
  if (attemptsVal) attempts = +attemptsVal

  minNumberIpt.value = ''
  maxNumberIpt.value = ''
  attemptsIpt.value = ''
  randomNumber = Math.round(Math.random() * (maxNumber - minNumber) + minNumber)
  attemptsCount = attempts

  minSpan.textContent = minNumber
  maxSpan.textContent = maxNumber
  attemptsSpan.textContent = attempts
})


function winOrLoose(result, count) {
  attemptsCount = attempts
  randomNumber = Math.round(Math.random() * (maxNumber - minNumber) + minNumber)
  generateBtn.textContent = 'Generate'
  settingBtn.disabled = false
  switch (result) {
    case 'win':
      out.textContent = 'Поздравляю вы победили. Сделано ходов: ' + (attempts - count)
      break
    case 'loose':
      out.textContent = 'Вы проиграли. Загаданное число: ' + randomNumber
      break
    default: return
  }
}

function noDot(e) {
  if (e.key === '.' || e.key === ',' || +this.value > 15) e.preventDefault()
}

attemptsIpt.addEventListener('keypress', noDot)
minNumberIpt.addEventListener('keypress', noDot)
maxNumberIpt.addEventListener('keypress', noDot)

