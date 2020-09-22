// Create Phone Number
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers){
  num = [];
  
  for (var i = 0; i < numbers.length; i++) {
    num.push(numbers[i].toString());
  }

  return `(${num.slice(0,3).join("")}) ${num.slice(3, 6).join("")}-${num.slice(6).join("")}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));