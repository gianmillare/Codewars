// Convert string to camel case
// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(text) {
  text = text.replace(/_/gi, "-").split("-");

  if (text.length == 0) {
    return "";
  }

  var ans = [text[0]];

  for (var i = 1; i < text.length; i++) {
    ans.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));
  }

  return ans.join("");
}

console.log(toCamelCase(""));
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));
console.log(toCamelCase("The_coding_warrior_and_eye"));