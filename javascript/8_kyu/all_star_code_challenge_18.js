// All Star Code Challenge #18
// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript

function strCount(str, letter){  
  var count = 0;
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] == letter) {
      count++;
    }
  }
  
  return count;
}