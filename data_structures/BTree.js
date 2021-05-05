function BTree() {
  this.root = null
  this.array = []
  this.searchValue = null

  this.secretArray = []

  this.secretReverseArray = []
  this.reverseCallsCount = 0

  this.Node = function (value) {
    this.value = value
    this.left = null
    this.right = null
  }

  this.insertNode = function (node, newNode, mode) {
    if (mode === 1) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode, 1);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode, 1);
        }
      }
    } if (mode === 'reverseMode') {
      if (newNode.value > node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode, 'reverseMode');
        }
      } else {
        if (node.right === null) {
          node.right = newNode;

        } else {
          this.insertNode(node.right, newNode, 'reverseMode');
        }
      }
    }
  };

  this.inOrderTraverse = function (node, callback) {
    if (node) {
      this.inOrderTraverse(node.left, callback)
      callback(node.value)
      this.inOrderTraverse(node.right, callback)
    }
  }
  this.privateRun = function (node, mode, value) {
    if (node) {
      if (mode === 1) {
        this.privateRun(node.left, 1)
        this.array.push(node.value)
        this.privateRun(node.right, 1)
      }
      if (mode === 2) {
        if (node.value === value) {
          this.searchValue = node
          return true
        }
        if (node.value > value) {
          this.privateRun(node.left, 2, value)
        }
        if (node.value < value) {
          this.privateRun(node.right, 2, value)
        }

      }
      if (mode === 3) {
        this.searchValue = node
        this.privateRun(node.left, 3)
      }
      if (mode === 4) {
        this.searchValue = node
        this.privateRun(node.right, 4)
      }
      if (mode === 5) {
        if (node.left === null && node.right === null) {
          this.searchValue++;
        }
        this.privateRun(node.left, 5);
        this.privateRun(node.right, 5);
      }
      if (mode === 6) {
        if (node.left !== null || node.right !== null) {
          this.searchValue++;
        }
        this.privateRun(node.left, 6);
        this.privateRun(node.right, 6);
      }
      if (mode === "heightCountMode") {
        return (
          1 +
          Math.max(
            this.privateRun(node.left, "heightCountMode"),
            this.privateRun(node.right, "heightCountMode")
          )
        );
      }
    }
    return 0
  }
  this.reverseInsert = function (value) {
    var newNode = new this.Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode, 'reverseMode');
    }
    this.secretReverseArray.push(value);
  };
}

BTree.prototype.init = function (array) {
  if (!Array.isArray(array)) {
    return -1
  }
  for (var i = 0; i < array.length; i++) {
    this.insert(array[i])
  }
}
BTree.prototype.insert = function (value) {
  var newNode = new this.Node(value)
  if (this.reverseCallsCount % 2 !== 0) {
    return -1;
  }
  if (this.root === null) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode, 1)
  }
  this.secretArray.push(value)
}
BTree.prototype.print = function (type, callback) {
  switch (type) {
    case 'pre-order':
      break;
    case 'post-order':
      break;
    case 'in': this.inOrderTraverse(this.root, callback)
  }
}

BTree.prototype.toArray = function () {
  this.privateRun(this.root, 1)
  var array = new Array(this.array.length)
  for (var i = 0; i < this.array.length; i++) {
    array[i] = this.array[i]
  }
  this.array.length = 0
  return array;
}

BTree.prototype.clear = function () {
  this.root = null
}

BTree.prototype.search = function (value) {
  this.privateRun(this.root, 2, value)
  if (this.searchValue === null) {
    return -1
  }
  var result = Object.assign(this.searchValue)
  this.searchValue = null
  return result
}

BTree.prototype.remove = function (value) {
  var serchNode = this.search(value)
  if (serchNode === -1) {
    return serchNode
  }
  else if (serchNode.left && serchNode.right) {
    var sortArr = this.toArray()
    var indexofValue = sortArr.indexOf(value)
    var newArr = []
    for (let i = 0; i < this.secretArray.length; i++) {
      if (this.secretArray[i] === value) {
        newArr.push(sortArr[indexofValue + 1])
      }
      else if (this.secretArray[i] === sortArr[indexofValue + 1]) {
        continue
      }
      else {
        newArr.push(this.secretArray[i])
      }
    }
    this.secretArray.length = 0
  }
  else {
    var newArr = []
    for (var i = 0; i < this.secretArray.length; i++) {
      if (this.secretArray[i] === value) continue
      newArr.push(this.secretArray[i])
    }
    this.secretArray.length = 0
  }
  this.root = null
  this.init(newArr)
}

BTree.prototype.minNode = function () {
  this.privateRun(this.root, 3)
  if (this.searchValue === null) {
    return -1
  }
  var result = Object.assign(this.searchValue)
  this.searchValue = null
  return result
}

BTree.prototype.maxNode = function () {
  this.privateRun(this.root, 4)
  if (this.searchValue === null) {
    return -1
  }
  var result = Object.assign(this.searchValue)
  this.searchValue = null
  return result
}

BTree.prototype.leaves = function () {
  this.privateRun(this.root, 5)
  if (this.secretArray.length === 1) {
    return 0
  }
  var result = this.searchValue
  this.searchValue = null
  return result
}

BTree.prototype.nodes = function () {
  if (this.secretArray.length === 1) {
    return 1
  }
  this.privateRun(this.root, 6)
  var result = this.searchValue
  this.searchValue = null
  return result
}
BTree.prototype.size = function () {
  if (this.secretArray.length === 1) {
    return 1
  }
  return this.nodes() + this.leaves()
}

BTree.prototype.height = function () {
  if (this.root && this.root.left === null && this.root.right === null) {
    return 0;
  }
  var result = this.privateRun(this.root, "heightCountMode");
  return result - 1;
};

BTree.prototype.reverse = function () {
  if (this.root === null) {
    return -1;
  }
  this.reverseCallsCount++;
  this.root = null;
  if (this.reverseCallsCount % 2 !== 0) {
    for (var i = 0; i < this.secretArray.length; i++) {
      this.reverseInsert(this.secretArray[i])
    }
  }
  if (this.reverseCallsCount % 2 === 0) {
    this.init(this.secretReverseArray);
  }
}
module.exports = BTree


// let a = new BTree()
// a.init([2, 1, 3])
// a.reverse()
// console.log(a)
// a.reverse()
// console.log(a)
// a.reverse()
// console.log(a)