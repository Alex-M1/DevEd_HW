//elements
var generateBtn = document.querySelector('.generate'),
  resetBtn = document.querySelector('.reset'),
  minNumIpt = document.querySelector('.min-number'),
  maxNumIpt = document.querySelector('.max-number'),
  mainForm = document.querySelector('form'),
  out = document.querySelector('.out')

//general variables
var lastNums = [],
  clickCount = 0

mainForm.addEventListener('submit', function (e) { return e.preventDefault() })

generateBtn.addEventListener('click', generateClickHandler)

function generateClickHandler() {
  var minVal = +minNumIpt.value,
    maxVal = +maxNumIpt.value,
    randNum = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal

  if (minVal >= maxVal) {
    return out.innerHTML = "Минимальное число должно <br> быть меньше максимального!"
  }

  out.textContent = 'Generate number: ' + randNum

  if (clickCount === maxVal - minVal) {
    out.innerHTML = 'Generate number: <br> Elements are over'
    generateBtn.disabled = true
  }
  if (binarySearch(randNum, lastNums) !== -1) {
    return generateClickHandler()
  }

  clickCount++

  if (clickCount) {
    minNumIpt.readOnly = true
    maxNumIpt.readOnly = true
  }

  lastNums.push(randNum)
  lastNums = insertionSort(lastNums)
}

resetBtn.addEventListener('click', function () {
  generateBtn.disabled = false
  clickCount = 0
  lastNums = []
  minNumIpt.readOnly = false
  maxNumIpt.readOnly = false
})

function insertionSort(inputArr) {
  var n = inputArr.length
  for (var i = 0; i < n; i++) {
    var current = inputArr[i]
    var j = i - 1
    while ((j > -1) && (current < inputArr[j])) {
      inputArr[j + 1] = inputArr[j];
      j--
    }
    inputArr[j + 1] = current
  }
  return inputArr
}

function binarySearch(value, list) {
  var first = 0,
    last = list.length - 1,
    position = -1,
    found = false,
    middle = null

  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2)
    if (list[middle] == value) {
      found = true
      position = middle
    } else if (list[middle] > value) {
      last = middle - 1
    } else {
      first = middle + 1
    }
  }
  return position
}