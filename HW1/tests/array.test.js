var {
  minEl, maxEl, firstMinIndex, lastMinIndex,
  firstMaxIndex, lastMaxIndex, sumOddIndex, revers,
  oddQuantity, changePath, bubble, insert, selection
} = require('../arrays')

describe('minEl', function () {
  it('should be defined ', function () {
    expect(minEl).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof minEl).toBe('function');
  })
  it('should be array != array', function () {
    expect(minEl()).toBe('Передайте массив');
  })
  it('should be array != array', function () {
    expect(minEl(12)).toBe('Передайте массив');
  })
  it('should be minEl', function () {
    expect(minEl([8, 2, 3, 4, 6])).toBe(2);
  })
  it('should be minEl', function () {
    expect(minEl([8, 2, 3, 4, 6])).not.toBe(3);
  })
})

describe('maxEl', function () {
  it('should be defined ', function () {
    expect(maxEl).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof maxEl).toBe('function');
  })
  it('should be array != array', function () {
    expect(maxEl()).toBe('Передайте массив');
  })
  it('should be array != array', function () {
    expect(maxEl(12)).toBe('Передайте массив');
  })
  it('should be maxEl', function () {
    expect(maxEl([8, 2, 3, 4, 6])).toBe(8);
  })
  it('should be maxEl', function () {
    expect(maxEl([8, 2, 3, 4, 6])).not.toBe(3);
  })
})

describe('firstMinIndex', function () {
  it('should be defined ', function () {
    expect(firstMinIndex).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof firstMinIndex).toBe('function');
  })
  it('should be array != array', function () {
    expect(firstMinIndex()).toBe('Передайте массив');
  })
  it('should be array != array', function () {
    expect(firstMinIndex(12)).toBe('Передайте массив');
  })
  it('should be firstMinIndex', function () {
    expect(firstMinIndex([8, 2, 3, 4, 6])).toBe(1);
  })
  it('should be firstMinIndex', function () {
    expect(firstMinIndex([8, 2, 3, 4, 2])).not.toBe(4);
  })
})

describe('lastMinIndex', function () {
  it('should be defined ', function () {
    expect(lastMinIndex).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof lastMinIndex).toBe('function');
  })
  it('should be array != array', function () {
    expect(lastMinIndex()).toBe('Передайте массив');
  })
  it('should be array != array', function () {
    expect(lastMinIndex(12)).toBe('Передайте массив');
  })
  it('should be lastMinIndex', function () {
    expect(lastMinIndex([8, 2, 3, 4, 2])).toBe(4);
  })
  it('should be lastMinIndex', function () {
    expect(lastMinIndex([8, 2, 3, 4, 2])).not.toBe(1);
  })
})

describe('firstMaxIndex', function () {
  it('should be defined ', function () {
    expect(firstMaxIndex).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof firstMaxIndex).toBe('function');
  })
  it('should be array != array', function () {
    expect(firstMaxIndex()).toBe('Передайте массив');
  })
  it('should be array != array', function () {
    expect(firstMaxIndex(12)).toBe('Передайте массив');
  })
  it('should be firstMaxIndex', function () {
    expect(firstMaxIndex([8, 2, 3, 4, 2])).toBe(0);
  })
  it('should be firstMaxIndex', function () {
    expect(firstMaxIndex([8, 2, 3, 8, 2])).not.toBe(3);
  })
})

describe('lastMaxIndex', function () {
  it('should be defined ', function () {
    expect(lastMaxIndex).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof lastMaxIndex).toBe('function');
  })
  it('should be array != array', function () {
    expect(lastMaxIndex()).toBe('Передайте массив');
  })
  it('should be array != array', function () {
    expect(lastMaxIndex(12)).toBe('Передайте массив');
  })
  it('should be lastMaxIndex', function () {
    expect(lastMaxIndex([8, 2, 3, 8, 2])).toBe(3);
  })
  it('should be lastMaxIndex', function () {
    expect(lastMaxIndex([8, 2, 3, 8, 2])).not.toBe(0);
  })
})

describe('sumOddIndex', function () {
  it('should be defined ', function () {
    expect(sumOddIndex).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof sumOddIndex).toBe('function');
  })
  it('should be array != array', function () {
    expect(sumOddIndex()).toBe('Передайте массив');
  })
  it('should be array != array', function () {
    expect(sumOddIndex(12)).toBe('Передайте массив');
  })
  it('should be sumOddIndex', function () {
    expect(sumOddIndex([8, 2, 3, 1, 2])).toBe(3);
  })
})

describe('revers', function () {
  it('should be defined ', function () {
    expect(revers).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof revers).toBe('function');
  })
  it('should be array != array', function () {
    expect(revers()).toBe('Передайте массив');
  })
  it('should be array != array', function () {
    expect(revers(12)).toBe('Передайте массив');
  })
  it('should be revers', function () {
    expect(revers([8, 2, 3, 1, 2])).toStrictEqual([2, 1, 3, 2, 8]);
  })
})

describe('oddQuantity', function () {
  it('should be defined ', function () {
    expect(oddQuantity).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof oddQuantity).toBe('function');
  })
  it('should be array != array', function () {
    expect(oddQuantity()).toBe('Передайте массив');
  })
  it('should be array != array', function () {
    expect(oddQuantity(12)).toBe('Передайте массив');
  })
  it('should be oddQuantity', function () {
    expect(oddQuantity([8, 2, 3, 1, 2])).toBe(2);
  })
})

describe('changePath', function () {
  it('should be defined ', function () {
    expect(changePath).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof changePath).toBe('function');
  })
  it('should be array != array', function () {
    expect(changePath()).toBe('Передайте массив');
  })
  it('should be array != array', function () {
    expect(changePath(12)).toBe('Передайте массив');
  })
  it('should be changePath with odd length', function () {
    expect(changePath([8, 2, 3, 1, 2])).toStrictEqual([3, 1, 2, 8, 2]);
  })
  it('should be changePath with even length', function () {
    expect(changePath([8, 2, 3, 1])).toStrictEqual([3, 1, 8, 2]);
  })
})


describe('bubble', function () {
  it('should be defined ', function () {
    expect(bubble).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof bubble).toBe('function');
  })
  it('should be array != array', function () {
    expect(bubble()).toBe('Передайте массив');
  })
  it('should be array != array', function () {
    expect(bubble(12)).toBe('Передайте массив');
  })
  it('should be bubble ', function () {
    expect(bubble([8, 2, 3, 1, 2])).toStrictEqual([1, 2, 2, 3, 8]);
  })
})

describe('selection', function () {
  it('should be defined ', function () {
    expect(selection).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof selection).toBe('function');
  })
  it('should be array != array', function () {
    expect(selection()).toBe('Передайте массив');
  })
  it('should be array != array', function () {
    expect(selection(12)).toBe('Передайте массив');
  })
  it('should be selection ', function () {
    expect(selection([8, 2, 3, 1, 2])).toStrictEqual([1, 2, 2, 3, 8]);
  })
})

describe('insert', function () {
  it('should be defined ', function () {
    expect(insert).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof insert).toBe('function');
  })
  it('should be array != array', function () {
    expect(insert()).toBe('Передайте массив');
  })
  it('should be array != array', function () {
    expect(insert(12)).toBe('Передайте массив');
  })
  it('should be insert ', function () {
    expect(insert([8, 2, 3, 1, 2])).toStrictEqual([1, 2, 2, 3, 8]);
  })
})