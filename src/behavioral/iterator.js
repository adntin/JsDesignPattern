/**
 * 迭代器
 */

// array
forEach = function(ary, fn) {
  for (var i = 0, l = ary.length; i < l; i++) {
    var c = ary[i];
    if (fn.call(c, i, c) === false) {
      return false;
    }
  }
};
// example
forEach([1, 2, 3], function(i, n) {
  console.log(i);
});

// object
forEach = function(obj, fn) {
  for (var i in obj) {
    var c = obj[i];
    if (fn.call(c, i, c) === false) {
      return false;
    }
  }
};
// example
forEach({ a: 1, b: 2 }, function(i, n) {
  console.log(i);
});
