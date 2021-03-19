var out = document.querySelector('.out')
var buttons = document.querySelectorAll('button')

buttons[0].addEventListener('click', function () {
  var figure = ''
  for (var i = 0; i < 7; i++) {
    for (var k = 0; k < 7; k++) {
      figure += '*'
    }
    figure += '<br>'
  }
  out.innerHTML = figure
})
buttons[1].addEventListener('click', function () {
  var figure = ''
  for (var i = 0; i < 7; i++) {
    for (var k = 0; k < 7; k++) {
      if (i === 0 || i == 6) figure += '*'
      else if (k === 0 || k == 6) figure += '*'
      else figure += ' '
    }
    figure += '<br>'
  }
  out.innerHTML = figure
})

buttons[2].addEventListener('click', function () {
  var figure = ''
  for (var i = 0; i < 7; i++) {
    for (var k = 0; k < 7; k++) {
      if (i === 0) figure += '*'
      else if (k === 0 || k === 6 - i) figure += '*'
      else figure += ' '
    }
    figure += '<br>'
  }
  out.innerHTML = figure
})

buttons[3].addEventListener('click', function () {
  var figure = ''
  for (var i = 0; i < 7; i++) {
    for (var k = 0; k < 7; k++) {
      if (i === 6) figure += '*'
      else if (k === 0 || k === 0 + i) figure += '*'
      else figure += ' '
    }
    figure += '<br>'
  }
  out.innerHTML = figure
})

buttons[4].addEventListener('click', function () {
  var figure = ''
  for (var i = 0; i < 7; i++) {
    for (var k = 0; k < 7; k++) {
      if (i === 6) figure += '*'
      else if (k === 6 || k === 6 - i) figure += '*'
      else figure += ' '
    }
    figure += '<br>'
  }
  out.innerHTML = figure
})


buttons[5].addEventListener('click', function () {
  var figure = ''
  for (var i = 0; i < 7; i++) {
    for (var k = 0; k < 7; k++) {
      if (i === 0) figure += '*'
      else if (k === 6 || k === 0 + i) figure += '*'
      else figure += ' '
    }
    figure += '<br>'
  }
  out.innerHTML = figure
})

buttons[6].addEventListener('click', function () {
  var figure = ''
  for (var i = 0; i < 7; i++) {
    for (var k = 0; k < 7; k++) {
      if (i === 0 + k || i === 6 - k) figure += '*'
      else figure += ' '
    }
    figure += '<br>'
  }
  out.innerHTML = figure
})

buttons[7].addEventListener('click', function () {
  var figure = ''
  for (var i = 0; i < 7; i++) {
    for (var k = 0; k < 7; k++) {
      if (i > 3) figure += ''
      else if (i === 0) figure += '*'
      else if (i === 0 + k || i === 6 - k) figure += '*'
      else figure += ' '
    }
    figure += '<br>'
  }
  out.innerHTML = figure
})

buttons[8].addEventListener('click', function () {
  var figure = ''
  for (var i = 0; i < 7; i++) {
    for (var k = 0; k < 7; k++) {
      if (i < 3) figure += ''
      else if (i === 6) figure += '*'
      else if (i === 0 + k || i === 6 - k) figure += '*'
      else figure += ' '
    }
    figure += '<br>'
  }
  out.innerHTML = figure
})