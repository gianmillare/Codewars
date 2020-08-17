// Return a string's even characters
// https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript

function evenChars(string) {
    var ans = [];
    
    if (string.length >= 2 && string.length < 100) {
      for (var i = 0; i < string.length; i++) {
        if ( !(i % 2 == 0) ) {
          ans.push(string[i]);
        }
      }
    } else {
      return "invalid string";
    }
    
    return ans;
  }