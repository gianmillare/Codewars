// Valid Parentheses
// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(s) {
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if ( s[i] ==")" && count === 0 ) {
      return false;
    } else if ( s[i] == "(" ) {
      count++;
    } else if ( s[i] == ")" ) {
      count--;
    }
  }
  return count == 0;
}

console.log(validParentheses("()"));
console.log(validParentheses(")(()))"));
console.log(validParentheses("(())((()())())"));