var { sumEven, isPrimeNumber, sqrt, sqrtBin, factorial, sumOfNumbers, mirrorNum } = require('../cycles')

describe('sumEven', function () {
  it('should be defined ', function () {
    expect(sumEven).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof sumEven).toBe('function');
  })
  it('call function', function () {
    expect(sumEven()).toBe('Сумма: 2450, Количество: 50');
  })
})

describe('isPrimeNumber', function () {
  it('should be defined ', function () {
    expect(isPrimeNumber).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof isPrimeNumber).toBe('function');
  })
  it('should be value != number', function () {
    expect(isPrimeNumber()).toBe('Введите число');
  })
  it('should be value <=1', function () {
    expect(isPrimeNumber(1)).toBe(false);
  })
  it('value should be a prime', function () {
    expect(isPrimeNumber(3)).toBe(true);
  })
  it('value should not be a prime', function () {
    expect(isPrimeNumber(4)).toBe(false);
  })
})

describe('sqrt', function () {
  it('should be defined ', function () {
    expect(sqrt).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof sqrt).toBe('function');
  })
  it('should be value != number', function () {
    expect(sqrt()).toBe('Введите число');
  })
  it('should be sqrt', function () {
    expect(sqrt(9)).toBe(3);
  })
})

describe('sqrtBin', function () {
  it('should be defined ', function () {
    expect(sqrtBin).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof sqrtBin).toBe('function');
  })
  it('should be value != number', function () {
    expect(sqrtBin()).toBe('Введите число');
  })
  it('should be sqr', function () {
    expect(sqrtBin(9)).toBe(3);
  })
})

describe('factorial', function () {
  it('should be defined ', function () {
    expect(factorial).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof factorial).toBe('function');
  })
  it('should be value != number', function () {
    expect(factorial()).toBe('Введите число');
  })
  it('should be factorial', function () {
    expect(factorial(3)).toBe(6);
  })
})

describe('sumOfNumbers', function () {
  it('should be defined ', function () {
    expect(sumOfNumbers).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof sumOfNumbers).toBe('function');
  })
  it('should be num != number', function () {
    expect(sumOfNumbers()).toBe('Введите число');
  })
  it('should be sumOfNumbers', function () {
    expect(sumOfNumbers(-123)).toBe(6);
  })
})

describe('mirrorNum', function () {
  it('should be defined ', function () {
    expect(mirrorNum).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof mirrorNum).toBe('function');
  })
  it('should be num != number', function () {
    expect(mirrorNum()).toBe('Введите число');
  })
  it('should be mirrorNum', function () {
    expect(mirrorNum(1230)).toBe(321);
  })
})