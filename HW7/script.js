function giveChange(array) {
  var cash25 = 0,
    cash50 = 0

  if (!Array.isArray(array)) return false

  for (var money of array) {
    if (money === 25) {
      cash25++
    }
    if (money === 50) {
      cash50++
      cash25--
    }
    if (money === 100) {
      cash25--
      cash50 > 0 ? cash50-- : cash25 -= 2
    }
    if (cash25 < 0 || cash50 < 0) return "NO"
  }
  return "YES"
}
// console.log(giveChange([25, 25, 25, 50, 25, 100]))
// console.log(giveChange([25, 50, 100]))
// console.log(giveChange([25, 50, 25, 100]))

var listOfPosts2 = [
  {
    id: 1,
    post: 'some post1',
    title: 'title 1',
    author: 'Ivanov',
    comments: [
      {
        id: 1.1,
        comment: 'some comment1',
        title: 'title 1',
        author: 'Rimus'
      },
      {
        id: 1.2,
        comment: 'some comment2',
        title: 'title 2',
        author: 'Uncle'
      }
    ]
  },
  {
    id: 2,
    post: 'some post2',
    title: 'title 2',
    author: 'Ivanov',
    comments: [
      {
        id: 1.1,
        comment: 'some comment1',
        title: 'title 1',
        author: 'Rimus'
      },
      {
        id: 1.2,
        comment: 'some comment2',
        title: 'title 2',
        author: 'Uncle'
      },
      {
        id: 1.3,
        comment: 'some comment3',
        title: 'title 3',
        author: 'Rimus'
      }

    ]
  },
  {
    id: 3,
    post: 'some post3',
    title: 'title 3',
    author: 'Rimus',
    comments: 'asda'
  },
  {
    id: 4,
    post: 'some post4',
    title: 'title 4',
    author: 'Uncle'
  }

]

function getQuntityPostsByAuthor(array, authorName) {
  var obj = {
    posts: 0,
    comments: 0
  }

  function counter(arr, property) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].author === authorName) {
        obj[property]++
      }
      if (Array.isArray(arr[i].comments)) {
        counter(arr[i].comments, 'comments')
      }
    }
  }

  counter(array, 'posts')
  return obj
}
// console.log(getQuntityPostsByAuthor(listOfPosts2, 'Rimus'))

function getSum(str1, str2) {
  var sum = '',
    rememberNum = 0
  if (typeof str1 !== 'string' || typeof str2 !== 'string'
    || !str1 || !str2) {
    return false
  }

  if (str2.length > str1.length) {
    var temp = str1
    str1 = str2
    str2 = temp
  }
  var secondNumber = str1.length - str2.length
  for (var i = str1.length - 1; i >= 0; i--) {
    if (i < str1.length - str2.length) {
      if (+str1[i] + rememberNum >= 10) {
        sum += +str1[i] + rememberNum - 10
        rememberNum = 1
      } else {
        sum += +str1[i] + rememberNum
        rememberNum = 0
      }
    } else if (+str1[i] + +str2[i - secondNumber] >= 10) {
      sum += +str1[i] + +str2[i - secondNumber] - 10 + rememberNum
      rememberNum = 1
    } else {
      sum += +str1[i] + +str2[i - secondNumber] + rememberNum
      rememberNum = 0
    }
  }

  sum = rememberNum === 0 ? sum : sum + rememberNum
  sum = sum.split('').reverse().join('')
  return sum
}

console.log(getSum('1111', '11'))



function complexFunction(arg1, arg2) {
  return arg1 + arg2
}

function cache(func) {
  var cache = [];

  return function (arg1, arg2) {

    for (var i = 0; i < cache.length; i++) {
      if (arguments[0] === cache[i].arg1 && arguments[1] === cache[i].arg2) {
        return cache[i].result
      }
    }
    var result = func(arg1, arg2);
    cache.push({ arg1: arguments[0], arg2: arguments[1], result });
    return result;
  };
}
var cachedFunc = cache(complexFunction);

cachedFunc('foo', 'bar')
cachedFunc('foo', 'bar')
cachedFunc('foo', 'baz')
cachedFunc('foo', 'bar')

module.exports = { giveChange, getQuntityPostsByAuthor, getSum, cache, complexFunction, listOfPosts2 }


