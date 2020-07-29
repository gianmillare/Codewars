// N-th Power
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

function index(array, n){
  // if statement to make sure index[n] is inside the length of the array
  if (n < array.length) {
    // if statisfied, find array to the nth power
    return array[n]**n
    // if not staisfied, return -1
  } else {
    return -1;
  }
}