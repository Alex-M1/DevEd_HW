// Функции

// Получить строковое название дня недели по номеру дня. 
function day(num) {
  var days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
  if (typeof num !== 'number') return 'Введите число от 1 до 7'
  if (num < 1 || num > 7) return 'Введите число от 1 до 7'
  return days[num - 1]
}

// Найти расстояние между двумя точками в двухмерном декартовом пространстве.
function getDistance(x1, x2, y1, y2) {
  if (
    typeof x1 !== "number" ||
    typeof x2 !== "number" ||
    typeof y1 !== "number" ||
    typeof y2 !== "number"
  ) return 'Аргументы должны быть числами'
  return +Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)).toFixed(2)
}

// Вводим число(0-999), получаем строку с прописью числа.
function divideNum(num) {
  var numArr = [],
    tmp = 0
  if (typeof num !== 'number') return 'Введите число'
  while (num) {
    tmp = num % 10
    num = (num - tmp) / 10
    numArr.unshift(tmp)
  }
  return numArr
}

function numsConvertToWord(num) {
  var result = null
  var ones = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть',
    'семь', 'восемь', 'девять', 'десять', 'одиннадцать',
    'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать',
    'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'
  ]
  var tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
    'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'
  ]
  var hundreds = ['', 'сто', 'двести', 'триста', 'четыреста',
    'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
  ]
  if (typeof num !== 'number') return 'Введите число'
  var numArr = divideNum(num)

  if (num < 0 || num > 999) result = 'Введите число от 1 до 999'
  else if (num === 0) result = 'Ноль'
  else {
    if (num < 20) result = ones[num]
    else if (num < 100) result = tens[numArr[0]] + ' ' + ones[numArr[1]]
    else if (numArr[1] > 1) result = hundreds[numArr[0]] + ' ' + tens[numArr[1]] + ' ' + ones[numArr[2]]
    else {
      var newNum = numArr[1].toString() + numArr[2]
      result = hundreds[numArr[0]] + ' ' + ones[+newNum]
    }
  }

  return result
}


// Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
function pseudoSplit(string, divideSign = '') {
  var result = []
  var word = ''
  if (typeof string !== 'string' || typeof divideSign !== 'string') return 'Введите строку'
  for (let i = 0; i < string.length; i++) {
    if (string[i] === divideSign) {
      result.push(word)
      word = ''
    }
    else word += string[i]
  }
  result.push(word)
  return result
}

function wordConvertToNumber(word) {
  var nums = {
    'один': 1, 'два': 2, 'три': 3, 'четыре': 4, 'пять': 5, 'шесть': 6,
    'семь': 7, 'восемь': 8, 'девять': 9, 'десять': 10, 'одиннадцать': 11,
    'двенадцать': 12, 'тринадцать': 13, 'четырнадцать': 14, 'пятнадцать': 15,
    'шестнадцать': 16, 'семнадцать': 17, 'восемнадцать': 18, 'девятнадцать': 19, 'двадцать': 20, 'тридцать': 30, 'сорок': 40, 'пятьдесят': 50,
    'шестьдесят': 60, 'семьдесят': 70, 'восемьдесят': 80, 'девяносто': 90, '': '', 'сто': 100, 'двести': 200, 'триста': 300, 'четыреста': 400,
    'пятьсот': 500, 'шестьсот': 600, 'семьсот': 700, 'восемьсот': 800, 'девятьсот': 900
  }
  if (typeof word !== 'string') return 'Введите строку'
  var wordArr = pseudoSplit(word.toLowerCase(), ' ')
  var result = 0
  for (var i = 0; i < wordArr.length; i++) {
    for (num in nums) {
      if (num === wordArr[i]) result += nums[num]
    }
  }
  return result
}

// console.log(wordConvertToNumber('Сто пяТнадцать'))

// Для задания 2 расширить диапазон до 999 миллиардов
// Для задания 3 расширить диапазон до 999 миллиардов

module.exports = {
  day, getDistance, divideNum, numsConvertToWord,
  pseudoSplit, wordConvertToNumber
}

