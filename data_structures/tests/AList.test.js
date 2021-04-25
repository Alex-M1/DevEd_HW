var { AList, ERRORS } = require("../AList");

var aList = new AList();

describe('AList', function () {
  it('should be defined ', function () {
    expect(AList).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof AList).toBe('function');
  });
  it('should be without argument', function () {
    var testList = new AList();
    expect(testList.array).toHaveLength(testList.DEFAULT_CAPACITY);
  });
  it('should be argument is number', function () {
    var testList = new AList(4);
    expect(testList.array).toHaveLength(4);
  });
  it('should be argument is array', function () {
    var testList = new AList([1, 2, 3]);
    expect(testList.array).toHaveLength(3);
  });
  it('should be invalid argument', function () {
    expect(() => {
      new AList('123');
    }).toThrow(ERRORS.invalidArgument);
  });
});

describe('aList.getSize', function () {
  it('should be defined ', function () {
    expect(aList.getSize).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof aList.getSize).toBe('function');
  });
  it('should be without argument', function () {
    var testList = new AList();
    expect(testList.getSize()).toBe(0);
  });
  it('should be argument is number', function () {
    var testList = new AList(4);
    expect(testList.getSize()).toBe(0);
  });
  it('should be argument is array', function () {
    var testList = new AList([1, 2, 3]);
    expect(testList.getSize()).toBe(3);
  });
});

describe('aList.clear', function () {
  it('should be defined ', function () {
    expect(aList.clear).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof aList.clear).toBe('function');
  });
  it('should be clear', function () {
    var testList = new AList([1, 2, 3]);
    var empty = new Array(10)
    testList.clear()
    expect(testList.getSize()).toBe(0);
    expect(testList.array).toHaveLength(10);
    expect(testList.array).toEqual(empty)
  });
});

describe('aList.ensureCapacity', function () {
  it('should be defined ', function () {
    expect(aList.ensureCapacity).toBeDefined();
  });
  it('should be ensureCapacity', function () {
    expect(typeof aList.ensureCapacity).toBe('function');
  });
  it('should be ensureCapacity call', function () {
    var testList = new AList([1, 2, 3, 4, 5]);
    testList.ensureCapacity();
    expect(testList.array).toHaveLength(12);
  });
  it('should be ensureCapacity call', function () {
    var testList = new AList([1, 2]);
    var newList = [1, 2, undefined, undefined, undefined];
    testList.ensureCapacity();
    expect(testList.array).toEqual(newList);
  });
});

describe('aList.add', function () {
  it('should be defined ', function () {
    expect(aList.add).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof aList.add).toBe('function');
  });
  it('should be add element', function () {
    var testList = new AList(3);
    var newList = [2, undefined, undefined];
    testList.add(2);
    expect(testList.array).toEqual(newList);
  });
  it('should be add element and change size', function () {
    var testList = new AList(3);
    var oldSize = testList.getSize()
    testList.add(2);
    expect(testList.getSize()).toBe(oldSize + 1);
  });
  it('should be add element and change size', function () {
    var testList = new AList([1, 2, 3]);
    var newArr = [1, 2, 3, 2, undefined, undefined, undefined]
    testList.add(2);
    expect(testList.array).toEqual(newArr);
  });
});

describe('aList.set', function () {
  it('should be defined ', function () {
    expect(aList.set).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof aList.set).toBe('function');
  });
  it("should throw error if invalid index", function () {
    try {
      var a = new AList(2);
      a.add(1);
      a.add(2);
      a.set(3, 3);
    } catch (e) {
      expect(e.message).toBe(ERRORS.indexNotDefined);
    }
  });

  it("should set in empty collection slot", function () {
    var a = new AList(2);
    var index = 0;
    var testArray = [1, undefined];
    var oldSize = a.getSize();
    a.set(1, index);
    expect(a.array[index]).toBe(testArray[index]);
    expect(a.getSize()).not.toBe(oldSize);
    expect(a.array).toEqual(testArray);
  });
  it("should set in filled collection slot", function () {
    var a = new AList([1, 2]);
    var index = 0;
    var testArray = [3, 2];
    var oldSize = a.getSize();
    a.set(3, index);
    expect(a.array[index]).toBe(testArray[index]);
    expect(a.getSize()).toBe(oldSize);
  });

});

describe('aList.get', function () {
  it('should be defined ', function () {
    expect(aList.set).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof aList.set).toBe('function');
  });
  it('should be get index', function () {
    var aList = new AList([1, 2]);
    expect(aList.get(1)).toBe(2);
  });
  it('should be get index', function () {
    var aList = new AList();
    expect(() => {
      aList.get(2)
    }).toThrow(ERRORS.elemNotDefined);
  });
});

describe("AList toArray", function () {
  it("should be defined ", function () {
    var a = new AList();
    expect(a.toArray).toBeDefined();
  });
  it("should be function", function () {
    var a = new AList();
    expect(typeof a.toArray).toBe("function");
  });
  it("should called without arguments", function () {
    var a = new AList(3);
    var testValue = 10;
    a.add(testValue);
    var result = a.toArray();
    expect(result).toEqual([10]);
  });
  it("should called without arguments", function () {
    var a = new AList(3);
    var testValue = 10;
    a.add(testValue);
    var result = a.toArray(123123213213);
    expect(result).toEqual([10]);
  });
});

describe("AList toString", function () {
  it("should be defined ", function () {
    var a = new AList();
    expect(a.toString).toBeDefined();
  });
  it("should be function", function () {
    var a = new AList();
    expect(typeof a.toString).toBe("function");
  });
  it("should called with 1 element in collection", function () {
    var a = new AList(3);
    var testValue = 10;
    a.add(testValue);
    var result = a.toString();
    expect(result).toEqual("10");
  });
  it("should called with 3 element in collection", function () {
    var a = new AList(3);
    var testValue = 10;
    a.add(testValue);
    a.add(testValue);
    a.add(testValue);
    var result = a.toString();
    expect(result).toEqual("10,10,10");
  });
});

describe("AList remove", function () {
  it("should be defined ", function () {
    var a = new AList();
    expect(a.remove).toBeDefined();
  });
  it("should be function", function () {
    var a = new AList();
    expect(typeof a.remove).toBe("function");
  });
  it("should be remove elem", function () {
    var a = new AList([1, 2, 3]);
    expect(a.remove(2)).toBe(2);
    expect(a.array).toEqual([1, undefined, 3]);
    expect(a.getSize()).toBe(2);
  });
  it('should be elem not defined', function () {
    var aList = new AList([1, 3, 4]);
    expect(() => {
      aList.remove(2)
    }).toThrow(ERRORS.elemNotDefined);
  });
});

describe("AList contains", function () {
  it("should be defined ", function () {
    var a = new AList();
    expect(a.contains).toBeDefined();
  });
  it("should be function", function () {
    var a = new AList();
    expect(typeof a.contains).toBe("function");
  });
  it("should be elem i array", function () {
    var a = new AList([1, 2, 3]);
    expect(a.contains(2)).toBe(true);
  });
  it("should be elem i array", function () {
    var a = new AList([1, 2, 3]);
    expect(a.contains(6)).toBe(false);
  });
});

describe("AList minValue", function () {
  it("should be defined ", function () {
    var a = new AList();
    expect(a.minValue).toBeDefined();
  });
  it("should be function", function () {
    var a = new AList();
    expect(typeof a.minValue).toBe("function");
  });
  it("should be minValue", function () {
    var a = new AList([1, 2, 3, 4, -1, 0]);
    expect(a.minValue()).toBe(-1);
  });
  it("should be empty clollection", function () {
    var aList = new AList();
    expect(() => aList.minValue()).toThrow(ERRORS.empty);
  });
});

describe("AList maxValue", function () {
  it("should be defined ", function () {
    var a = new AList();
    expect(a.maxValue).toBeDefined();
  });
  it("should be function", function () {
    var a = new AList();
    expect(typeof a.maxValue).toBe("function");
  });
  it("should be maxValue", function () {
    var a = new AList([1, 2, 3, 4, -1, 0]);
    expect(a.maxValue()).toBe(4);
  });
  it("should be empty clollection", function () {
    var aList = new AList();
    expect(() => aList.maxValue()).toThrow(ERRORS.empty);
  });
});

describe("AList minIndex", function () {
  it("should be defined ", function () {
    var a = new AList();
    expect(a.minIndex).toBeDefined();
  });
  it("should be function", function () {
    var a = new AList();
    expect(typeof a.minIndex).toBe("function");
  });
  it("should be minIndex", function () {
    var a = new AList([1, 2, 3, 4, -1, 0]);
    expect(a.minIndex()).toBe(4);
  });
  it("should be empty clollection", function () {
    var aList = new AList();
    expect(() => aList.minIndex()).toThrow(ERRORS.empty);
  });
});

describe("AList maxIndex", function () {
  it("should be defined ", function () {
    var a = new AList();
    expect(a.maxIndex).toBeDefined();
  });
  it("should be function", function () {
    var a = new AList();
    expect(typeof a.maxIndex).toBe("function");
  });
  it("should be maxIndex", function () {
    var a = new AList([1, 2, 3, 4, -1, 0]);
    expect(a.maxIndex()).toBe(3);
  });
  it("should be empty clollection", function () {
    var aList = new AList();
    expect(() => aList.maxIndex()).toThrow(ERRORS.empty);
  });
});

describe("AList maxIndex", function () {
  it("should be defined ", function () {
    var a = new AList();
    expect(a.reverse).toBeDefined();
  });
  it("should be function", function () {
    var a = new AList();
    expect(typeof a.reverse).toBe("function");
  });
  it("should be reverse", function () {
    var a = new AList(4);
    a.add(2)
    a.add(3)
    a.add(4)
    a.reverse()
    expect(a.array).toEqual([4, 3, 2, undefined]);
  });
  it("should be reverse", function () {
    var a = new AList(5);
    a.add(2);
    a.add(3);
    a.set(4, 4);
    a.reverse();
    expect(a.array).toEqual([4, 3, 2, undefined, undefined]);
  });
  it("should be empty clollection", function () {
    var aList = new AList();
    expect(() => aList.reverse()).toThrow(ERRORS.empty);
  });
});

describe("AList halfreverse", function () {
  it("should be defined ", function () {
    var a = new AList();
    expect(a.halfReverse).toBeDefined();
  });
  it("should be function", function () {
    var a = new AList();
    expect(typeof a.halfReverse).toBe("function");
  });
  it("should be halfreverse arr.len is odd and is undef", function () {
    var a = new AList();
    for (var i = 0; i < 9; i++) {
      a.add(i);
    }
    a.halfReverse();
    expect(a.array).toEqual([4, 5, 6, 7, 8, 0, 1, 2, 3, undefined]);
  });
  it("should be halfreverse arr.len is even and is undef", function () {
    var a = new AList();
    for (var i = 0; i < 8; i++) {
      a.add(i);
    }
    a.halfReverse();
    expect(a.array).toEqual([4, 5, 6, 7, 0, 1, 2, 3, undefined, undefined]);
  });
  it("should be halfreverse arr.len is even", function () {
    var a = new AList([1, 2, 3, 4]);
    a.halfReverse();
    expect(a.array).toEqual([3, 4, 1, 2]);
  });
  it("should be halfreverse arr.len is odd", function () {
    var a = new AList([1, 2, 3, 4, 5]);
    a.halfReverse();
    expect(a.array).toEqual([3, 4, 5, 1, 2]);
  });
  it("should be empty clollection", function () {
    var aList = new AList();
    expect(() => aList.halfReverse()).toThrow(ERRORS.empty);
  });
});

describe("AList retainAll", function () {
  it("should be defined ", function () {
    var a = new AList();
    expect(a.retainAll).toBeDefined();
  });
  it("should be function", function () {
    var a = new AList();
    expect(typeof a.retainAll).toBe("function");
  });
  it("should be empty clollection", function () {
    var aList = new AList();
    expect(() => aList.retainAll([1, 2])).toThrow(ERRORS.empty);
  });
  it("should be arg !== arr", function () {
    var aList = new AList([1, 2]);
    expect(() => aList.retainAll(2, 3)).toThrow(ERRORS.invalidArgument);
  });
  it("should change collection ", function () {
    var dead = new AList();
    dead.add(1);
    dead.add(2);
    dead.add(3);
    var testArray = dead.array;
    var oldSize = dead.getSize();
    dead.retainAll([1, 2, 3, 1]);
    expect(dead.array).toEqual(testArray);
    expect(dead.getSize()).toBe(oldSize);
  });
  it("should change collection ", function () {
    var dead = new AList();
    dead.add(1);
    dead.add(2);
    dead.add(3);
    var testArray = [
      1,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ];
    var oldSize = dead.getSize();
    dead.retainAll([5, 6, 1]);
    expect(dead.array).toEqual(testArray);
    expect(dead.getSize()).not.toBe(oldSize);
    expect(dead.getSize()).toBe(1);
  });
});

describe("AList removeAll", function () {
  it("should be defined ", function () {
    var a = new AList();
    expect(a.removeAll).toBeDefined();
  });
  it("should be function", function () {
    var a = new AList();
    expect(typeof a.removeAll).toBe("function");
  });
  it("should be empty clollection", function () {
    var aList = new AList();
    expect(() => aList.removeAll([1, 2])).toThrow(ERRORS.empty);
  });
  it("should be arg !== arr", function () {
    var aList = new AList([1, 2]);
    expect(() => aList.removeAll(2, 3)).toThrow(ERRORS.invalidArgument);
  });
  it("should not change collection ", function () {
    var dead = new AList();
    dead.add(1);
    dead.add(2);
    dead.add(3);
    var testArray = dead.array;
    var oldSize = dead.getSize();
    dead.removeAll([4, 5, 6, 4]);
    expect(dead.array).toEqual(testArray);
    expect(dead.getSize()).toBe(oldSize);
  });
  it("should change collection ", function () {
    var dead = new AList();
    dead.add(1);
    dead.add(2);
    dead.add(3);
    var testArray = new Array(10);
    testArray.fill(undefined);
    var oldSize = dead.getSize();
    dead.removeAll([1, 2, 3]);
    expect(dead.array).toEqual(testArray);
    expect(dead.getSize()).not.toBe(oldSize);
    expect(dead.getSize()).toBe(0);
  });
});