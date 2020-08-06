// Simple string reversal
// https://www.codewars.com/kata/5a71939d373c2e634200008e/train/javascript

function solve(str) {
  var indices = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
      indices.push(i);
    }
  }

  var ans = [];

  for (var j = 0; j < str.length; j++) {
    if ( !(str[j] == ' ') ) {
      ans.push(str[j]);
    }
  }

  ans.reverse();

  for (var k = 0; k < indices.length; k++) {
    ans.splice(indices[k], 0, ' ');
  }

  return ans.join('');
}

console.log(solve("your code rocks"));