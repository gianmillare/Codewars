// max diff - easy
// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript

function maxDiff(list) {
    if (list.length == 0 || list.length == 1) {
      return 0;
    } else {
      var max = list.reduce(function (a, b) { return Math.max(a, b) });
      var min = list.reduce(function (a, b) { return Math.min(a, b) });
      return max - min;
    }
  };