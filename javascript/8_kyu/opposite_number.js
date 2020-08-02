// Opposite number
// https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript

function opposite(number) {
    if (number < 0 ) {
      return Math.abs(number);
    } else {
      return number * -1;
    }
  }