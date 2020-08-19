// Nth power rules them all!
// https://www.codewars.com/kata/58aed2cafab8faca1d000e20/train/javascript

function modifiedSum(a, n) {
  var ans = [];
  
  for (var i = 0; i < a.length; i++) {
    ans.push(a[i]**n);
  }
  
  return ans.reduce(function (a, b) { return a + b }) - a.reduce(function (a, b) { return a + b });
}