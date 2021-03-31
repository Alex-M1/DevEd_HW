var {
  day, getDistance, divideNum, numsConvertToWord,
  pseudoSplit, wordConvertToNumber
} = require('../functions')

describe('day', function () {
  it('should be defined ', function () {
    expect(day).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof day).toBe('function');
  })
  it('should be num != number', function () {
    expect(day()).toBe('Введите число от 1 до 7');
  })
  it('number<1', function () {
    expect(day()).toBe('Введите число от 1 до 7');
  })
  it('number>7', function () {
    expect(day()).toBe('Введите число от 1 до 7');
  })
  it('should be day', function () {
    expect(day(2)).toBe('Вторник');
  })
})

describe('getDistance', function () {
  it('should be defined ', function () {
    expect(getDistance).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof getDistance).toBe('function')
  })
  it('should be args != number', function () {
    expect(getDistance(1, 2)).toBe('Аргументы должны быть числами')
  })
  it('should be getDistance', function () {
    expect(getDistance(2, 3, 1, 2)).toBe(1.41)
  })
})

describe('divideNum', function () {
  it('should be defined ', function () {
    expect(divideNum).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof divideNum).toBe('function')
  })
  it('should be args != number', function () {
    expect(divideNum('2')).toBe('Введите число')
  })
  it('should be divideNum', function () {
    expect(divideNum(321)).toStrictEqual([3, 2, 1])
  })
})

describe('numsConvertToWord', function () {
  it('should be defined ', function () {
    expect(numsConvertToWord).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof numsConvertToWord).toBe('function')
  })
  it('should be args != number', function () {
    expect(numsConvertToWord('2')).toBe('Введите число')
  })
  it('if num<0', function () {
    expect(numsConvertToWord(-1)).toBe('Введите число от 1 до 999')
  })
  it('if num>999', function () {
    expect(numsConvertToWord(1000)).toBe('Введите число от 1 до 999')
  })
  it('if num==0', function () {
    expect(numsConvertToWord(0)).toBe('Ноль')
  })
  it('if num<20', function () {
    expect(numsConvertToWord(19)).toBe('девятнадцать')
  })
  it('if num>20', function () {
    expect(numsConvertToWord(21)).toBe('двадцать один')
  })
  it('if num>100 & middle 0', function () {
    expect(numsConvertToWord(105)).toBe('сто пять')
  })
  it('if num>100 & num<120', function () {
    expect(numsConvertToWord(110)).toBe('сто десять')
  })
  it('if num>120', function () {
    expect(numsConvertToWord(241)).toBe('двести сорок один')
  })
})

describe('pseudoSplit', function () {
  it('should be defined ', function () {
    expect(pseudoSplit).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof pseudoSplit).toBe('function')
  })
  it('should be args != number', function () {
    expect(pseudoSplit(2)).toBe('Введите строку')
  })
  it('should be args != number', function () {
    expect(pseudoSplit(21, '')).toBe('Введите строку')
  })
  it('should be args != number', function () {
    expect(pseudoSplit('2 2 1', ' ')).toStrictEqual(['2', '2', '1'])
  })
})

describe('wordConvertToNumber', function () {
  it('should be defined ', function () {
    expect(wordConvertToNumber).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof wordConvertToNumber).toBe('function')
  })
  it('should be args != string', function () {
    expect(wordConvertToNumber(2)).toBe('Введите строку')
  })
  it('if wordConvertToNumber', function () {
    expect(wordConvertToNumber('семьсот двадцать один')).toBe(721)
  })
})