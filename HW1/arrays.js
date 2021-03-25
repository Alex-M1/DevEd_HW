//3. Одномерные массивы

var arr1 = [4, 2, 5, 1, 3, 6],
  arr2 = [1, 5, 2, 3, 4, 5],
  arr3 = [-2, 0, -6, 2, -6]

//EX 3.1 Найти минимальный элемент массива
function minEl(array) {
  var min = Infinity
  for (var i = 0; i < array.length; i++) {
    if (min > array[i]) min = array[i]
  }
  return min
}

//EX 3.2 Найти максимальный элемент массива
function maxEl(array) {
  var max = -Infinity
  for (var i = 0; i < array.length; i++) {
    if (max < array[i]) max = array[i]
  }
  return max
}

//EX 3.3 Найти индекс минимального элемента массива

function firstMinIndex(array) {
  //1-й найденый индекс
  var min = Infinity
  var idx = 0
  for (var i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i]
      idx = i
    }
  }
  return idx
}

function lastMinIndex(array) {
  //последний найденый индекс
  var min = Infinity
  var idx = 0
  for (var i = 0; i < array.length; i++) {
    if (min >= array[i]) {
      min = array[i]
      idx = i
    }
  }
  return idx
}

//EX 3.4 Найти индекс максимального элемента массива 

function firstMaxIndex(array) {
  //1-й найденый индекс
  var max = -Infinity
  var idx = 0
  for (var i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i]
      idx = i
    }
  }
  return idx
}

function lastMaxIndex(array) {
  //1-й найденый индекс
  var max = -Infinity
  var idx = 0
  for (var i = 0; i < array.length; i++) {
    if (max <= array[i]) {
      max = array[i]
      idx = i
    }
  }
  return idx
}



//EX 3.5 Посчитать сумму элементов массива с нечетными индексами
function sumOddIndex(array) {
  var sum = 0
  for (var i = 0; i < array.length; i++) {
    if (i % 2 !== 0) sum += array[i]
  }
  return sum
}


//EX 3.6 Сделать реверс массива (массив в обратном направлении)
function revers(array) {
  var revArr = []
  for (var i = 0; i < array.length; i++) {
    revArr[i] = array[array.length - i - 1]
  }
  return revArr
}


//EX 3.7 Посчитать количество нечетных элементов массива
function oddQuantity(array) {
  var result = 0
  for (key in array) {
    if (key % 2 !== 0) result++
  }
  return result
}


//EX 3.8 Поменять местами первую и вторую половину массива, например, для массива 
// 1 2 3 4, результат 3 4 1 2

function changePath(array) {
  var firstPartLen = Math.floor(array.length / 2),
    secondPartLen = array.length - firstPartLen,
    newArr = []
  for (i = 0; i < secondPartLen; i++) {
    newArr[i] = array[i + firstPartLen]
  }
  for (i = 0; i < firstPartLen; i++) {
    newArr[i + secondPartLen] = array[i]
  }
  return newArr
}

// Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
function bubble(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var wasSwap = false // был ли поменян массив на данной итерации
    for (var k = 0; k < arr.length - 1 - i; k++) {
      if (arr[k] > arr[k + 1]) {
        //меняем местами елементы
        var swap = arr[k]
        arr[k] = arr[k + 1]
        arr[k + 1] = swap
        wasSwap = true // если был поменян меняем на true
      }
    }
    if (!wasSwap) break // если изменений не было выходим из цикла
  }
  return arr
}

function insert(arr) {
  for (var i = 1, l = arr.length; i < l; i++) {
    var current = arr[i]
    for (k = i; k > 0 && arr[k - 1] > current; k--) {
      arr[k] = arr[k - 1]
    }
    arr[i] = current
  }
  return arr
}

function selection(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var indexMin = i
    for (var k = i + 1; k < arr.length; k++) {
      if (arr[indexMin] > arr[k]) {
        indexMin = k
      }
    }
    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
    }
  }
  return arr
}

// [4,3,1,2,3,4]
// console.log(selection(arr2))
// Отсортировать массив (Quick, Merge, Shell, Heap)

let a = 'adsadsadasd фвфвфывф'.split('')
  .map(el => el.split('')
    .map(elEL => elEl.sort())).join('')
console.log(a)