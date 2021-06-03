var IList = function (capacity) { this.capacity = capacity }; //  function constructor (like interface) инициализация коллекции, без аргумента, с аргументом capacity, с аргументом array
IList.prototype.clear = function () { }; // очистка коллекции, size = 0
IList.prototype.getSize = function () { }; // возвращает размер коллекции, количество элементов коллекции, не undefined
IList.prototype.add = function (value) { }; // добавление элемента в коллекцию
IList.prototype.set = function (value, index) { }; // запись в коллекцию согласно переданному индексу, операция перезаписывания
IList.prototype.get = function (index) { }; // возвращает элемент коллекции по индексу
IList.prototype.remove = function (value) { }; // удаляет элемент из коллекции и возвращает его
IList.prototype.toArray = function () { }; // приведение данных коллекции в массив
IList.prototype.toString = function () { }; // представление коллекции в строковом виде
IList.prototype.contains = function (value) { }; // возвращает true || false, проверяя наличие элемента в коллекции
IList.prototype.minValue = function () { }; // возвращает максимальный элемент коллекции
IList.prototype.maxValue = function () { }; // возвращает минимальный элемент коллекции
IList.prototype.minIndex = function () { }; // возвращает индекс максимального элемента коллекции
IList.prototype.maxIndex = function () { }; // возвращает индекс минимального элемента коллекции
IList.prototype.reverse = function () { }; // выполняет реверс коллекции
IList.prototype.halfReverse = function () { }; // выполняет половинный реверс коллекции
IList.prototype.retainAll = function (array) { }; // оставляет все элементы в существующей коллекции на основании найденных совпадений в переданном массиве в качестве аргумента
IList.prototype.removeAll = function (array) { }; // удаляет все элементы в существующей коллекции на основании найденных совпадений в переданном массиве в качестве аргумента
IList.prototype.sort = function () { }; // рекурсивная сортировка на выбор (Quick or Merge)
IList.prototype.print = function () { }; // вывод в консоль каждого из элементов коллекции
var ERRORS = {
  empty: 'Collection is empty',
  elemNotDefined: 'Element is not defined',
  indexNotDefined: 'Index is not defined',
  invalidArgument: 'Invalid argument'
}

var AList = function (capacity) {
  this.size = 0
  this.DEFAULT_CAPACITY = 10;

  this.array = (() => {
    if (!capacity) {
      return new Array(this.DEFAULT_CAPACITY);
    }
    else if (typeof capacity === "number") {
      return new Array(capacity);
    }
    else if (Array.isArray(capacity)) {
      this.size = capacity.length
      return capacity
    }
    else {
      throw new Error(ERRORS.invalidArgument)
    }
  })();

  this.ensureCapacity = function () {
    var extendArr = new Array(this.array.length + Math.floor(this.array.length * 1.5))
    for (var i = 0; i < this.array.length; i++) {
      extendArr[i] = this.array[i]
    }
    this.array = extendArr
  }
}
AList.prototype = Object.create(IList.prototype);
AList.prototype.constructor = AList;

AList.prototype.clear = function () {
  this.size = 0
  this.array = new Array(this.DEFAULT_CAPACITY)
}

AList.prototype.getSize = function () {
  return this.size
}

AList.prototype.add = function (value) {
  if (this.size === this.array.length) {
    this.ensureCapacity()
  }
  for (let i = 0; i < this.array.length; i++) {
    if (this.array[i] === undefined) {
      this.array[i] = value
      this.size++
      break
    }
  }
}

AList.prototype.set = function (value, index) {
  if (index < 0 || index > this.array.length - 1) {
    throw new Error(ERRORS.indexNotDefined);
  }
  if (this.array[index] === undefined) {
    this.array[index] = value;
    this.size++
  }
  else if (this.array[index] !== undefined) {
    this.array[index] = value;
  }
};

AList.prototype.get = function (index) {
  if (this.array[index] !== undefined) {
    return this.array[index];
  }
  else {
    throw new Error(ERRORS.elemNotDefined);
  };
};

AList.prototype.remove = function (value) {
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] === value) {
      var delValue = this.array[i];
      this.size--;
      delete this.array[i];
      return delValue;
    }
  }
  throw new Error(ERRORS.elemNotDefined);
};

AList.prototype.toArray = function () {
  var newArr = [];
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] !== undefined) {
      newArr.push(this.array[i]);
    }
  }
  return newArr;
};

AList.prototype.toString = function () {
  var result = "";
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] !== undefined) {
      result += this.array[i] + ",";
    }
  }
  var fullestResult = result.substr(0, result.length - 1);
  return fullestResult;
};

AList.prototype.contains = function (value) {
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] === value) {
      return true;
    }
  };
  return false;
};

AList.prototype.minValue = function () {
  var min = this.array[0];
  if (this.size === 0) {
    throw new Error(ERRORS.empty)
  }
  for (var i = 1; i < this.array.length; i++) {
    if (this.array[i] < min) {
      min = this.array[i];
    };
  };
  return min;
};

AList.prototype.maxValue = function () {
  var max = this.array[0];
  if (this.size === 0) {
    throw new Error(ERRORS.empty)
  }
  for (var i = 1; i < this.array.length; i++) {
    if (this.array[i] > max) {
      max = this.array[i];
    };
  };
  return max;
};
AList.prototype.minIndex = function () {
  if (this.size === 0) {
    throw new Error(ERRORS.empty)
  }
  var min = this.array[0],
    index;
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] < min) {
      min = this.array[i];
      index = i
    };
  };
  return index;
};

AList.prototype.maxIndex = function () {
  if (this.size === 0) {
    throw new Error(ERRORS.empty)
  }
  var max = this.array[0],
    index;
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] > max) {
      max = this.array[i];
      index = i
    };
  };
  return index;
};

AList.prototype.reverse = function () {
  if (this.size === 0) {
    throw new Error(ERRORS.empty);
  }
  var newArray = [];
  var undef = 0;
  for (var i = this.array.length - 1; i >= 0; i--) {
    if (this.array[i] === undefined) {
      undef++;
      continue;
    }
    newArray.push(this.array[i]);
  }
  this.array = newArray.concat(new Array(undef));
};

AList.prototype.halfReverse = function () {
  if (this.size === 0) {
    throw new Error(ERRORS.empty);
  };
  var
    undef = this.array.length - this.size,
    newArr = this.toArray(this.array),
    firstPartLen = Math.floor(newArr.length / 2),
    secondPartLen = newArr.length - firstPartLen,
    reverseArr = []

  for (i = 0; i < secondPartLen; i++) {
    reverseArr[i] = newArr[i + firstPartLen]
  }
  for (i = 0; i < firstPartLen; i++) {
    reverseArr[i + secondPartLen] = newArr[i]
  }
  this.array = reverseArr.concat(new Array(undef))
};

IList.prototype.retainAll = function (retainArray) {
  if (!Array.isArray(retainArray)) {
    throw new Error(ERRORS.invalidArgument);
  }
  if (this.getSize() === 0) {
    throw new Error(ERRORS.empty);
  }
  var array = [];
  for (var m = 0; m < retainArray.length; m++) {
    if (array.includes(retainArray[m])) continue;
    array.push(retainArray[m]);
  }
  var newArr = [];
  var newSize = 0;

  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] === undefined) {
      continue;
    };
    for (var k = 0; k < array.length; k++) {
      if (this.array[i] === array[k]) {
        newArr.push(this.array[i]);
        newSize++;
        break;
      };
    };
  };
  this.array = newArr.concat(new Array(this.array.length - newSize));
  this.size = newSize;
};

AList.prototype.removeAll = function (removeArray) {
  if (this.getSize() === 0) {
    throw new Error(ERRORS.empty);
  }
  if (!Array.isArray(removeArray)) {
    throw new Error(ERRORS.invalidArgument);
  }
  var array = [];
  for (var m = 0; m < removeArray.length; m++) {
    if (array.includes(removeArray[m])) continue;
    array.push(removeArray[m]);
  }
  var newArr = [];
  var undef = 0;
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] === undefined) {
      undef++;
      continue;
    }
    var count = 0;
    for (var j = 0; j < array.length; j++) {
      if (this.array[i] === array[j]) {
        this.size--;
        undef++;
        count = 0;
        break;
      } else {
        count++;
      }
    }
    if (count !== 0) newArr.push(this.array[i]);
  }
  this.array = newArr.concat(new Array(undef));
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! no tests
AList.prototype.print = function () {
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] === undefined) continue
    console.log(this.array[i])
  }
}

module.exports = { AList, ERRORS }


