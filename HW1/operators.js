// 1.Условные операторы

// EX-1.1 Если а – четное посчитать а*б, иначе а+б

function someCalc(a, b) {
  return a % 2 === 0 ? a * b : a + b
}

//EX-1.2 Определить какой четверти принадлежит точка с координатами (х,у)

function getCoordQuarter(x, y) {
  if (x === 0 && y === 0) return 'Ноль'
  else if (x === 0 && y > 0) return 'Точка лежит на оси y больше 0'
  else if (x === 0 && y < 0) return 'Точка лежит на оси y меньше 0'
  else if (x > 0 && y === 0) return 'Точка лежит на оси x больше 0'
  else if (x < 0 && y === 0) return 'Точка лежит на оси x меньше 0'
  else if (x > 0 && y > 0) return 'I четверть'
  else if (x < 0 && y > 0) return 'II четверть'
  else if (x < 0 && y < 0) return 'III четверть'
  else if (x > 0 && y < 0) return 'IV четверть'
  else return 'Неправильные данные'
}

//EX 1.3 Найти суммы только положительных из трех чисел

function sumPositiveNumbers(a, b, c) {
  if (a >= 0 && b >= 0 && c >= 0) return a + b + c
  else if (a < 0 && b >= 0 && c >= 0) return b + c
  else if (a > 0 && b <= 0 && c >= 0) return a + c
  else if (a > 0 && b >= 0 && c <= 0) return a + b
  else return 'Должно быть хотя бы 2 положительных числа'
}

//EX 1.4 Посчитать выражение (макс(а*б*с, а+б+с))+3

function maxCalc(a, b, c) {
  var sum = a + b + c
  var mult = a * b * c
  return sum > mult ? sum + 3 : mult + 3
}

// EX 1.5 Написать программу определения оценки студента по его рейтингу, на основе следующих правил
//Рейтинг -> Оценка
// 0-19->F
// 20-39->E
// 40-59->D
// 60-74->C
// 75-89->B
// 90-100->A

function getRate(rate) {
  if (rate >= 0 && rate <= 19) return 'F'
  else if (rate >= 20 && rate <= 39) return 'E'
  else if (rate >= 40 && rate <= 59) return 'D'
  else if (rate >= 60 && rate <= 74) return 'C'
  else if (rate >= 75 && rate <= 89) return 'B'
  else if (rate >= 90 && rate <= 100) return 'A'
  else return 'Введите число от 0 до 100'
}
