// Replace With Alphabet Position
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
  const letter = "abcdefghijklmnopqrstuvwxyz";
  var alpha_index = {};
  var ans = [];

  for (var i = 0; i < letter.length; i++) {
    alpha_index[letter[i]] = i + 1;
  }

  for (var i = 0; i < text.length; i++) {
    if ( text[i].toLowerCase() in alpha_index ) {
      ans.push(alpha_index[text[i].toLowerCase()]);
    }
  }

  return ans.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));