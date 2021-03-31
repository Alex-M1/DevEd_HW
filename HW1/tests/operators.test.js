var { getRate, maxCalc, sumPositiveNumbers, getCoordQuarter, someCalc } = require('../operators')

describe('someCalc', function () {
  it('should be defined ', function () {
    expect(someCalc).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof someCalc).toBe('function');
  })
  it('should without arguments', function () {
    expect(someCalc()).toBe(false);
  })
  it('should be one arguments', function () {
    expect(someCalc(1)).toBe(false);
  })
  it('should be arguments is NaN', function () {
    expect(someCalc(1, '2')).toBe(false);
  })
  it('a is even', function () {
    expect(someCalc(2, 3)).toBe(6);
  })
  it('a is odd', function () {
    expect(someCalc(3, 3)).toBe(6);
  })
})

describe('getCoordQuarter', function () {
  it('should be defined ', function () {
    expect(getCoordQuarter).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof getCoordQuarter).toBe('function');
  })
  it('if typeof arguments !==number', function () {
    expect(getCoordQuarter()).toBe('Неправильные данные');
  })

  it('if x === 0 && y === 0', function () {
    expect(getCoordQuarter(0, 0)).toBe('Ноль');
  })
  it('if x === 0 && y > 0', function () {
    expect(getCoordQuarter(0, 1)).toBe('Точка лежит на оси y больше 0');
  })
  it('if x === 0 && y < 0)', function () {
    expect(getCoordQuarter(0, -1)).toBe('Точка лежит на оси y меньше 0');
  })
  it('x > 0 && y === 0', function () {
    expect(getCoordQuarter(1, 0)).toBe('Точка лежит на оси x больше 0');
  })
  it('x < 0 && y === 0', function () {
    expect(getCoordQuarter(-1, 0)).toBe('Точка лежит на оси x меньше 0');
  })
  it('x > 0 && y > 0', function () {
    expect(getCoordQuarter(1, 1)).toBe('I четверть');
  })
  it('x < 0 && y > 0', function () {
    expect(getCoordQuarter(-1, 1)).toBe('II четверть');
  })
  it('x < 0 && y < 0', function () {
    expect(getCoordQuarter(-1, -1)).toBe('III четверть');
  })
  it('x > 0 && y < 0', function () {
    expect(getCoordQuarter(1, -1)).toBe('IV четверть');
  })
})

describe('sumPositiveNumbers', function () {
  it('should be defined ', function () {
    expect(sumPositiveNumbers).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof sumPositiveNumbers).toBe('function');
  })
  it('should without arguments', function () {
    expect(sumPositiveNumbers()).toBe(false);
  })
  it('if typeof arguments !==number', function () {
    expect(sumPositiveNumbers(1, 2, '2')).toBe(false);
  })
  it('if a >= 0 && b >= 0 && c >= 0', function () {
    expect(sumPositiveNumbers(1, 2, 4)).toBe(7);
  })
  it('a < 0 && b >= 0 && c >= 0', function () {
    expect(sumPositiveNumbers(-1, 2, 4)).toBe(6);
  })
  it('if a > 0 && b <= 0 && c >= 0', function () {
    expect(sumPositiveNumbers(1, -2, 4)).toBe(5);
  })
  it('if a > 0 && b >= 0 && c <= 0', function () {
    expect(sumPositiveNumbers(1, 2, -4)).toBe(3);
  })
  it('if 2 number is negative', function () {
    expect(sumPositiveNumbers(-1, 2, -4)).toBe('Должно быть хотя бы 2 положительных числа');
  })
})

describe('maxCalc', function () {
  it('should be defined ', function () {
    expect(maxCalc).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof maxCalc).toBe('function');
  })
  it('should without arguments or arguments is NaN', function () {
    expect(maxCalc()).toBe(false);
  })
  it('if sum>mult', function () {
    expect(maxCalc(3, 0, 0)).toBe(6);
  })
  it('if sum>mult', function () {
    expect(maxCalc(3, 1, 2)).toBe(9);
  })
})

describe('getRate', function () {
  it('should be defined ', function () {
    expect(getRate).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof getRate).toBe('function');
  })
  it('if argumets !== number', function () {
    expect(getRate()).toBe('Введите число от 0 до 100');
  })
  it('if 0 <= rate <= 19', function () {
    expect(getRate(18)).toBe('F');
  })
  it('if 20 <= rate <= 39', function () {
    expect(getRate(20)).toBe('E');
  })
  it('if 40 <= rate <= 59', function () {
    expect(getRate(40)).toBe('D');
  })
  it('if 60 <= rate <= 74', function () {
    expect(getRate(60)).toBe('C');
  })
  it('if 75 <= rate <= 89', function () {
    expect(getRate(75)).toBe('B');
  })
  it('if 90 <= rate <= 100', function () {
    expect(getRate(90)).toBe('A');
  })
})