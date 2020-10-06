// Sort the Odd
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray (arr) {
  if (arr.length == 0) {
    return arr;
  } else {
    var odds = [];
    var evens = {};

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        evens[i] = arr[i];
      } else {
        odds.push(arr[i]);
      }
    }

    odds.sort(function(a, b) { return a - b });
    
    for (var key in evens) {
      odds.splice(parseInt(key), 0, evens[key]);
    }

    return odds;
  }
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(sortArray([]));
console.log(sortArray([11, 1, 2, 8, 3, 4, 5]));