// IQ Test
// https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript

function iqTest(numbers) {
  numbers = numbers.split(" ").map(function(a) {
    return parseInt(a, 10);
  })

  var split_numbers = {"evens": [], "odds": []}

  for (var i = 0; i < numbers.length; i++) {
    if ( numbers[i] % 2 == 0 ) {
      split_numbers["evens"].push(numbers[i]);
    } else {
      split_numbers["odds"].push(numbers[i]);
    }
  }

  var search;

  if (split_numbers["evens"].length == 1) {
    search = split_numbers["evens"][0];
  } else {
    search = split_numbers["odds"][0];
  }

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] == search) {
      return i + 1;
    }
  }
}

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 1 1"))