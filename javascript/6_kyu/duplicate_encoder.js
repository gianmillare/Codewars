// Duplicate Encoder
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
  word = word.toLowerCase();
  var charCount = {};
  var ans = [];

  for (var i = 0; i < word.length; i++) {
    if ( word[i] in charCount ) {
      charCount[word[i]]++;
    } else {
      charCount[word[i]] = 1;
    }
  }

  for (var key = 0; key < word.length; key++) {
    if (charCount[word[key]] == 1) {
      ans.push("(");
    } else {
      ans.push(")");
    }
  }

  return ans.join("");
}


console.log(duplicateEncode("recede"))