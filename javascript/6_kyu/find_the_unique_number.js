// Find the unique number
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/python

// Solution 1: 2 Sets and Count Function
function count(num, arr) {
  counter = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      counter++;
    }
  }

  return counter;
}

function findUniq(arr) {
  var unique = [...new Set(arr)];
  
  for (var i = 0; i < unique.length; i++) {
    counter = count(unique[i], arr);
    if (counter == 1) {
      return unique[i];
    }
  }
}

console.log(findUniq([ 0, 1, 0 ]));
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 3, 10, 3, 3, 3 ]));