// Create Phone Number
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

// Solution 1: Template Literal
function createPhoneNumber(numbers){
  num = [];

  for (var i = 0; i < numbers.length; i++) {
    num.push(numbers[i].toString());
  }

  return `(${num.slice(0,3).join("")}) ${num.slice(3, 6).join("")}-${num.slice(6).join("")}`
}

// Solution 2: Format Replace
function createPhoneNumber(numbers) {
  var template = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    var template = template.replace("x", numbers[i]);
  }

  return template;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));