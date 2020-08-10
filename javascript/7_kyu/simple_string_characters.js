// Simple string characters
// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript

function solve(s){
    var u = 0;
    var l = 0;
    var n = 0;
    var special = 0;
    var letters = /^[A-Za-z]+$/;
    
    for (var i = 0; i < s.length; i++) {
      if (s[i].match(letters) && s[i] == s[i].toUpperCase()) {
          u++;
      } else if (s[i].match(letters) && s[i] == s[i].toLowerCase()) {
          l++;
      } else if ( !(isNaN(s[i])) ) {
          n++;
      } else {
          special++;
      }
    }

    return [u, l, n, special];
  }

console.log(solve("Codewars@codewars123.com"));