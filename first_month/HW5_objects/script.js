// Задания
// 1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.
// Правила:
// -Яйца варить 5 минут
// -Вместительность емкости не более 5 яиц одновременно

function getCookingTime(eggsAmount) {
  return Math.ceil(eggsAmount / 5) * 5
}




// console.log(getCookingTime(0)); //returns 0
// console.log(getCookingTime(5)); //returns 5
// console.log(getCookingTime(9)); //returns 10 (because capacity is 5 so we need to do it 2 times)
// 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.

function getNumber(array) {
  var even = [],
    odd = []
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) even.push(array[i])
    else odd.push(array[i])
    if (even.length !== 0 && odd.length !== 0 && even.length !== odd.length) {
      return even.length > odd.length ? odd[0] : even[0]
    }
  }
}
console.log(getNumber([5, 4, 7, 9, 15, 19, 777, -15, -11, 3, 9, 23, -17])) //returns 4
console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]))  //returns 13

// 3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями. Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов, которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).

function findTitle(array, string) {
  var result = []
  for (var i = 0; i < array.length; i++) {
    for (var key in array[i]) {
      if (key === 'title' && array[i][key].toLowerCase().indexOf(string, 0) !== -1) {
        result.push(array[i]);
      }
    }
  }
  return result
}

let arr = [{
  title: 'Some title1'
}, {
  title: 'I like JS'
}, {
  user: 'This obj doesn\’t have key title js'
}, {
  title: 'Js - is the best!'
}];
// console.log(findTitle(arr, 'js'))  // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]

// 4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке
function countCharacters(string) {
  var newObj = {}
  for (var i = 0; i < string.length; i++) {
    if (
      (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) ||
      string[i].toUpperCase() !== string[i].toLowerCase()
    ) {
      newObj[string[i]] = newObj[string[i]] ? newObj[string[i]] + 1 : 1
    }
  }
  return newObj
}

// console.log(countCharacters('a 2ab !d’'))  // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
// countCharacters(‘aabcddeffge’) // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
// countCharacters(‘a 2ab !d’) // should return {a: 2, b:1, d:1, 2:1}


// 5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.
// Палиндром - это слово, фраза, число или другая последовательность символов, которая читается так же, как вперед и назад, например, «мадам».
function getNextPalindrome(number) {
  function isPalidrome(num) {
    var numTostring = num.toString()
    var reversNum = ''
    for (var i = numTostring.length - 1; i >= 0; i--) {
      reversNum += numTostring[i]
    }
    return numTostring === reversNum
  }
  for (var i = number + 1; i < Infinity; i++) {
    if (isPalidrome(i) && i > 10) return i
  }
}

// console.log(getNextPalindrome(888))
// getNextPalindrome(7) // returns 11
// getNextPalindrome(99) //returns 101
// getNextPalindrome(132) // returns 141
// getNextPalindrome(888) // returns 898
// getNextPalindrome(999) // returns 1001



