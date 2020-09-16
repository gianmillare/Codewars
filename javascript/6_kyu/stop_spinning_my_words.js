// Stop gninnipS My sdroW!
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(sentence){
  var ans = [];
  sentence = sentence.split(" ");

  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i].length >= 5) {
      ans.push(sentence[i].split("").reverse().join(""));
    } else {
      ans.push(sentence[i]);
    }
  }

  return ans.join(" ");
}

console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is another test"))