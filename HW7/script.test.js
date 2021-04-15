var { giveChange, getQuntityPostsByAuthor, getSum, cache, complexFunction, listOfPosts2 } = require('./script.js')

describe('giveChange', function () {
  it('should be defined ', function () {
    expect(giveChange).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof giveChange).toBe('function');
  })
  it('argument shouldn`t be array', function () {
    expect(giveChange(1)).toBe(false);
  })
  it('argument shouldn`t be array', function () {
    expect(giveChange(1)).not.toBe("NO");
  })
  it('argument shouldn`t be array', function () {
    expect(giveChange(1)).not.toBe("YES");
  })
  it('vasya doesn`t have change', function () {
    expect(giveChange([25, 50, 100])).toBe("NO");
  })
  it('vasya doesn`t have change', function () {
    expect(giveChange([25, 50, 100])).not.toBe("YES");
  })
  it('vasya doesn`t have change', function () {
    expect(giveChange([25, 50, 100])).not.toBe(false);
  })
  it('vasya have change', function () {
    expect(giveChange([25, 25, 25, 50, 25, 100])).toBe("YES");
  })
  it('vasya have change', function () {
    expect(giveChange([100, 25, 25, 50, 25, 100])).toBe("NO");
  })
  it('vasya doesn`t have change', function () {
    expect(giveChange([25, 25, 25, 50, 25, 100])).not.toBe("NO");
  })
  it('vasya doesn`t have change', function () {
    expect(giveChange([25, 25, 25, 50, 25, 100])).not.toBe(false);
  })
})

describe("complexFunction", function () {
  it("should be defined ", function () {
    expect(complexFunction).toBeDefined();
  });
  it("should be function", function () {
    expect(typeof complexFunction).toBe("function");
  });
  it("should be without arguments", function () {
    expect(complexFunction()).toBe(NaN);
  });
  it("should be only with one string argument", function () {
    expect(complexFunction("heh")).toBe("hehundefined");
  });
  it("should be only with one number argument", function () {
    expect(complexFunction(1)).toBe(NaN);
  });
  it("should be only with one number argument", function () {
    expect(complexFunction(1)).toBe(NaN);
  });
  it("should be  with one number argument and with second string argument", function () {
    expect(complexFunction(1, "da")).toBe("1da");
  });
  it("should be  with one string argument and with second number argument", function () {
    expect(complexFunction("da", 1)).toBe("da1");
  });
});

describe('cache', function () {
  it('should be defined ', function () {
    expect(cache).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof cache).toBe('function');
  })
  it('return function', function () {
    expect(typeof cache()).toBe('function');
  })
  it('if arguments in cache', function () {
    var complexFunction = jest.fn()
    var func = cache(complexFunction)
    func('1', 2)
    func('1', 2)
    func('1', 2)
    func('1', 2)
    expect(complexFunction).toBeCalledTimes(1);
  })
  it('if diffrent arguments', function () {
    var complexFunction = jest.fn()
    var func = cache(complexFunction)
    func('1', 2)
    func('1', 2)
    func('1', 3)
    func('1', 2)
    expect(complexFunction).toBeCalledTimes(2);
  })
})

describe('getQuntityPostsByAuthor', function () {
  it('should be defined ', function () {
    expect(getQuntityPostsByAuthor).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof getQuntityPostsByAuthor).toBe('function');
  })
  it('should be property is Rimus', function () {
    var result = { "comments": 3, "posts": 1 }
    expect(getQuntityPostsByAuthor(listOfPosts2, 'Rimus')).toEqual(result);
  })
  it('should be property is Rimus', function () {
    var result = { "comments": 3, "posts": 1 }
    expect(getQuntityPostsByAuthor(listOfPosts2, 'Rimus')).toEqual(result);
  })
})

describe('getSum', function () {
  it('should be defined ', function () {
    expect(getSum).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof getSum).toBe('function');
  })
  it('should be invalid argument', function () {
    expect(typeof getSum).toBe('function');
  })
  function invalid(arr) {
    return [arr, false]
  }
  test.each([
    invalid([1, 2]),
    invalid(['1', 2]),
    invalid([1, '2']),
    invalid([]),
  ])(`testing with %s arguments  expected result %s`, function (args, result) {
    var [arg1, arg2] = args
    expect(getSum(arg1, arg2)).toBe(result)
  })

  test.each([
    [['10', '20'], '30'],
    [['9999', '99'], '10098'],
    [['99', '9999'], '10098'],
    [['11', '21'], '32'],
    [['1', '5'], '6'],
  ])(`testing with %s arguments  expected result %s`, function (args, result) {
    var [arg1, arg2] = args
    expect(getSum(arg1, arg2)).toBe(result)
  })
})
