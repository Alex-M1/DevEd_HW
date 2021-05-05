var BTree = require("../BTree")

function standartTest(func) {
  it('should be defied', function () {
    expect(func).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof func).toBe('function')
  })
}
describe('\n BTree.init ', function () {
  var bTree = new BTree()
  standartTest(bTree.init)
  test.each([
    [2, -1],
    ['2', -1],
    [{ a: 1 }, -1]
  ])(`testing with %s arguments  expected result %s`, function (arg, result) {
    expect(bTree.init(arg)).toBe(result)
  })
  it("should return -1 if argument !== array ", function () {
    var mockFn1 = jest.fn()
    expect(bTree.init(mockFn1)).toBe(-1)
  })
  it("should call insert method times like count of elements in argument array", function () {
    var argArray = [1, 2, 3, 4]
    var mockFn2 = jest.fn()
    bTree.insert = mockFn2
    bTree.init(argArray)
    expect(mockFn2).toBeCalledTimes(argArray.length)
    expect(mockFn2).toBeCalledWith(argArray[0])
    expect(mockFn2).toBeCalledWith(argArray[1])
    expect(mockFn2).toBeCalledWith(argArray[2])
    expect(mockFn2).toBeCalledWith(argArray[3])
  })
})

describe('\n BTree.clear ', function () {
  var bTree = new BTree()
  standartTest(bTree.clear)
  it('should be clear tree', function () {
    bTree.insert(50)
    bTree.clear()
    expect(bTree.root).toBe(null)
  })
})

describe("\n BTree insert", function () {
  var bTree = new BTree()
  standartTest(bTree.insert)
  it("should call this.Node ", function () {
    var mockNode = jest.fn().mockImplementation((value) => {
      this.value = value
      this.left = null
      this.right = null
    })
    var value = 25
    bTree.Node = mockNode
    bTree.insert(value)
    expect(mockNode).toHaveBeenCalledWith(value)
  })
  it("should this.root = newNode ", function () {
    var bTreeOne = new BTree()
    var testValue = 25
    bTreeOne.insert(testValue)
    expect(bTreeOne.root).toEqual({ value: testValue, left: null, right: null })
    expect(bTreeOne.root.value).toBe(testValue)
    expect(bTreeOne.root.left).toBe(null)
    expect(bTreeOne.root.right).toBe(null)
  })
  it("should this.inserNode to haveBeenCalledWith our root and newNode ", function () {
    var bTreeTwo = new BTree()
    var testValue = 25
    var testValue1 = 26
    var mockInsertNode = jest.fn()
    bTreeTwo.insertNode = mockInsertNode
    bTreeTwo.insert(testValue)
    bTreeTwo.insert(testValue1)
    expect(mockInsertNode).toHaveBeenCalledWith(bTreeTwo.root, {
      value: testValue1,
      left: null,
      right: null,
    }, 1)
  })
  it("should return -1 if we try to insert in reversed tree", function () {
    var test1 = new BTree()
    test1.init([1, 3, 4, 5])
    test1.reverse()
    expect(test1.insert(32)).toBe(-1)
  })
})

describe("\n BTree toArray", function () {
  var bTree = new BTree()
  bTree.init([50, 25, 100])
  standartTest(bTree.toArray)
  it("should call with privateRun ", function () {
    var mockRun = jest.fn()
    bTree.privateRun = mockRun
    bTree.toArray()
    expect(mockRun).toHaveBeenCalledWith(bTree.root, 1)
  })
  it("should call with privateRun ", function () {
    var bTree = new BTree()
    bTree.init([50, 25, 100])
    expect(bTree.toArray()).toEqual([25, 50, 100])
  })
})

describe("\n BTree search", function () {
  var bTree = new BTree()
  standartTest(bTree.search)
  it("should call help method", function () {
    var mockPrivateRun = jest.fn()
    var testValue = 1
    bTree.privateRun = mockPrivateRun
    bTree.search(testValue)
    expect(bTree.privateRun).toHaveBeenCalledWith(bTree.root, 2, testValue)
  })
  it("should return -1 if serchValue === 0", function () {
    var bTreeTest1 = new BTree()
    var testSearchValue = 4
    bTreeTest1.init([1, 2, 3])
    expect(bTreeTest1.search(testSearchValue)).toBe(-1)
  })
  it("should return node if searchValue === argument value ", function () {
    var bTreeTest2 = new BTree()
    var testSearchValue = 4
    bTreeTest2.init([1, 2, 3, 24, 345, 5, -100, 3, 4])
    console.log(bTreeTest2.toArray())
    expect(bTreeTest2.search(testSearchValue)).toEqual({ value: 4, left: null, right: null })
  })
})

describe("\n BTree remove", function () {
  var bTree = new BTree()
  standartTest(bTree.remove)
  it('this search falied', function () {
    var bTree = new BTree()
    var value = 10
    var mock = jest.fn().mockReturnValue(-1)
    bTree.search = mock
    bTree.init([50, 100, 25])
    expect(bTree.remove(value)).toBe(-1)
    expect(mock).toHaveBeenCalledWith(value)
  })
  test.each([
    [38, [30, 18, 22, 40, 31, 34, 21, 15]],
    [18, [30, 21, 22, 38, 31, 34, 15, 40]],
    [22, [30, 18, 38, 31, 34, 21, 15, 40]],
    [31, [30, 18, 22, 38, 34, 21, 15, 40]],
    [34, [30, 18, 22, 38, 31, 21, 15, 40]],
    [15, [30, 18, 22, 38, 31, 34, 21, 40]],
    [30, [31, 18, 22, 38, 34, 21, 15, 40]]
  ])(`testing with %s arguments  expected result %s`, function (arg, result) {
    var bTree = new BTree()
    bTree.init([30, 18, 22, 38, 31, 34, 21, 15, 40])
    bTree.remove(arg)
    expect(bTree.secretArray).toEqual(result)
  })

})

describe("BTree minNode", function () {
  var bTree = new BTree()
  standartTest(bTree.minNode)

  it("should return -1 if don't initialize tree", function () {
    var bTreeTest1 = new BTree()
    var privateRunMock = jest.fn()
    bTreeTest1.privateRun = privateRunMock
    expect(bTreeTest1.minNode()).toBe(-1)
    expect(bTreeTest1.privateRun).toHaveBeenCalledWith(bTreeTest1.root, 3)
  })
  it("should return min value and set searchValue to null", function () {
    var b = new BTree()
    var expectResult = {
      left: null,
      right: { left: null, right: null, value: 15 },
      value: -100,
    }
    b.init([30, 18, 22, 38, -100, 31, 34, 21, 15, 40])
    expect(b.minNode()).toEqual(expectResult)
    expect(b.searchValue).toBe(null)
  })
})

describe("BTree maxNode", function () {
  var bTree = new BTree()
  standartTest(bTree.maxNode)
  it("should return -1 if don't initialize tree", function () {
    var bTreeTest1 = new BTree()
    var privateRunMock = jest.fn()
    bTreeTest1.privateRun = privateRunMock
    expect(bTreeTest1.maxNode()).toBe(-1)
    expect(bTreeTest1.privateRun).toHaveBeenCalledWith(bTreeTest1.root, 4)
  })
  it("should return max value and set searchValue to null", function () {
    var b = new BTree()
    var expectResult = {
      left: null,
      right: null,
      value: 40,
    }
    b.init([30, 18, 22, 38, -100, 31, 34, 21, 15, 40])
    expect(b.maxNode()).toEqual(expectResult)
    expect(b.searchValue).toBe(null)
  })
})

describe("BTree leaves", function () {
  var bTree = new BTree()
  standartTest(bTree.leaves)
  it("should return 0 if we have only root in Tree", function () {
    var test1Tree = new BTree()
    test1Tree.insert(5)
    expect(test1Tree.leaves()).toBe(0)
  })
  it("should privateRun to have been called with this.root and mode === 5", function () {
    var test2Tree = new BTree()
    test2Tree.init([3, 4, 5, 6, 7])
    var mockPrivateRun = jest.fn()
    test2Tree.privateRun = mockPrivateRun
    test2Tree.leaves()
    expect(test2Tree.privateRun).toHaveBeenCalledWith(test2Tree.root, 5)
  })
  it("should ", function () {
    var test3Tree = new BTree()
    test3Tree.init([3, 4, 5, 6, 7])
    expect(test3Tree.leaves()).toBe(1)
    expect(test3Tree.searchValue).toEqual(null)
  })

})

describe("BTree nodes", function () {
  var bTree = new BTree()
  standartTest(bTree.nodes)
  it("should return 0 if we have only root in Tree", function () {
    var test1Tree = new BTree()
    test1Tree.insert(5)
    expect(test1Tree.nodes()).toBe(1)
  })
  it("should privateRun to have been called with this.root and mode === 5", function () {
    var test2Tree = new BTree()
    test2Tree.init([3, 4, 5, 6, 7])
    var mockPrivateRun = jest.fn()
    test2Tree.privateRun = mockPrivateRun
    test2Tree.nodes()
    expect(test2Tree.privateRun).toHaveBeenCalledWith(test2Tree.root, 6)
  })
  it("should ", function () {
    var test3Tree = new BTree()
    test3Tree.init([3, 4, 5, 6, 7])
    expect(test3Tree.nodes()).toBe(4)
    expect(test3Tree.searchValue).toEqual(null)
  })
})

describe("BTree size", function () {
  var bTree = new BTree()
  standartTest(bTree.size)
  it("should return 0 if we not insert or initialize something in Tree", function () {
    var test1 = new BTree()
    expect(test1.size()).toBe(0)
  })
  it("should return 1 if we have only root in tree", function () {
    var test2 = new BTree()
    test2.insert(1)
    expect(test2.size()).toBe(1)
    expect(test2.root).not.toEqual(null)
  })
  it("should return 1 if we have only root in tree", function () {
    var test3 = new BTree()
    test3.init([40, 15, 31, 55, 42, 41, 61, 21, 56, 11, 28, 67, 2, 5, 39])
    expect(test3.size()).toBe(15)
    expect(test3.size()).toBe(test3.secretArray.length)
  })
})

describe("BTree height", function () {
  var bTree = new BTree()
  standartTest(bTree.height)
  it("should return 0 if we not insert or initialize something in Tree", function () {
    var test1 = new BTree()
    expect(test1.height()).toBe(-1)
  })
  it("should return 0 if we not insert or initialize something in Tree", function () {
    var testPrivateRun = new BTree()
    var mockPrivateRun = jest.fn()
    testPrivateRun.privateRun = mockPrivateRun
    testPrivateRun.init([1, 2, 3])
    testPrivateRun.height()
    expect(mockPrivateRun).toHaveBeenCalledWith(testPrivateRun.root, 'heightCountMode')
  })
  it("should return 1 if we have only root in tree", function () {
    var test2 = new BTree()
    test2.insert(1)
    expect(test2.height()).toBe(0)
    expect(test2.root).not.toEqual(null)
  })
  it("should return height of the tree", function () {
    var test3 = new BTree()
    test3.init([40, 15, 31, 55, 42, 41, 61, 21, 56, 11, 28, 67, 2, 5, 39, 85, 86, 87, 88])
    expect(test3.height()).toBe(7)
  })
})

describe("BTree reverse", function () {
  var bTree = new BTree()
  standartTest(bTree.reverse)
  it("should return -1 if we call with this.root === null", function () {
    var test1 = new BTree();
    expect(test1.reverse()).toBe(-1);
  });
  it("should change reverseCallsCount to +1 , change root to null ", function () {
    var test2 = new BTree();
    test2.init([1, 2, 3]);
    test2.reverseCallsCount = -1.5;
    var oldRoot = test2.root;
    test2.reverse();
    expect(test2.reverseCallsCount).toBe(-0.5);
    expect(test2.root).not.toEqual(oldRoot);
  });
  it("should call methods ", function () {
    var test10 = new BTree();
    var reverseInsertMock = jest.fn();
    test10.reverseInsert = reverseInsertMock;
    test10.init([1, 123, 213]);
    test10.reverse();
    expect(reverseInsertMock).toBeCalledTimes(3);
    expect(reverseInsertMock).toHaveBeenCalledWith(1);
    expect(reverseInsertMock).toHaveBeenCalledWith(123);
    expect(reverseInsertMock).toHaveBeenCalledWith(213);

  });
  it("should call methods ", function () {
    var test10 = new BTree();
    var reverseInsertMock = jest.fn();
    var initMock = jest.fn();
    test10.init = initMock;
    test10.insert(1);
    test10.insert(2);
    test10.insert(100);
    test10.reverse();
    test10.reverse();
    expect(initMock).toHaveBeenCalledWith(test10.secretReverseArray);
  });
  it("should reverse tree", function () {
    var test3 = new BTree();
    var expectRoot = {
      value: 40,
      left: { left: null, right: null, value: 45 },
      right: {
        left: null,
        right: { left: null, right: null, value: 10 },
        value: 15,
      },
    };
    test3.init([40, 15, 45, 10]);
    test3.reverse();
    expect(test3.root).toEqual(expectRoot);
    expect(test3.reverseCallsCount).toBe(1);
  });
  it("should double reverse tree", function () {
    var test3 = new BTree();
    var expectRoot = {
      value: 40,
      left: { left: { left: null, right: null, value: 10 }, right: null, value: 15 },
      right: {
        left: null,
        right: null,
        value: 45,
      },
    };
    test3.init([40, 15, 45, 10]);
    test3.reverse();
    test3.reverse();
    expect(test3.root).toEqual(expectRoot);
    expect(test3.reverseCallsCount).toBe(2);
  });
});