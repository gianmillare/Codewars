// Counting Duplicates
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
  text = text.toLowerCase();
  var letters = {};
  var count = 0;

  for (var i = 0; i < text.length; i++) {
    if ( !(text[i] in letters) ) {
      letters[text[i]] = 1;
    } else {
      letters[text[i]]++;
    }
  }

  for (key in letters) {
    if (letters[key] > 1) {
      count++;
    }
  }

  return count;
}

console.log(duplicateCount("Indivisibilities"))