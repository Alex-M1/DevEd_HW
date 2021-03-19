//2. Циклы

//EX 2.1 Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function sumEven() {
  var count = 0,
    sum = 0
  for (var i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      count++
      sum += i
    }
  }
  return 'Сумма: ' + sum + ', Количество: ' + count
}

//EX 2.2 Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
function isPrimeNumber(value) {
  if (value <= 1) return false
  for (var i = 2; i < value; i++) {
    if (value % i === 0) return false
  }
  return true
}

//EX 2.3 Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
function sqrt(num) {
  for (let i = 0; i < num; i++) {
    if (i * i === num) {
      return i
    }
  }
}

function sqrtBin(num) {
  var up = num
  var down = 0
  var mid = null
  while (up - down > 1) {
    mid = Math.floor((up + down) / 2)
    if (mid * mid <= num) down = mid
    else up = mid
  }
  return mid
}

//EX 2.4 Вычислить факториал числа n. n! = 1*2*…*n-1*n
function factorial(num) {
  var factorial = 1
  for (var i = 1; i < num + 1; i++) {
    factorial *= i
  }
  return factorial
}

//EX 2.5 Посчитать сумму цифр заданного числа
function sumOfNumbers(num) {
  var sum = 0,
    tmp = 0
  while (num) {
    tmp = num % 10
    num = (num - tmp) / 10
    sum += tmp
  }
  return sum
}

//EX 2.6 Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
function f26(num) {
  var result = '',
    tmp = ''
  while (num) {
    tmp = (num % 10).toString()
    result += tmp
    num = (num - tmp) / 10
  }
  return +result
}
