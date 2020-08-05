// Longest vowel chain
// https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript

function solve(s){
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var chain = [];
    var count = 0;
    for (var i = 0; i < s.length; i++) {
      if (vowels.includes(s[i])) {
        count++;
      } else {
        chain.push(count);
        count = 0;
      }
    }
    return chain.reduce(function (a, b) { return Math.max(a, b) });
  }

console.log(solve("strengthlessnesses"));