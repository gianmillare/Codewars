// Grasshopper - Summation
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

var summation = function (num) {
  // Create an array for all number between 1 and num
  var ans = [];
  // iterate through the 1 to num to 'append'  all digits into the array
  for (var i = 1; i <= num; i++) {
    ans.push(i);
  }
  // add all values inside the array
  return ans.reduce(function (a, b) { return a + b}, 0);
}