// Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

const vowels = ['a', 'e', 'i', 'o', 'u'];

function getCount(str) {
  var count = 0;
  
  for (var i = 0; i < str.length; i++) {
    if ( vowels.includes(str[i]) ) {
      count++;
    }
  }
  
  return count;
}