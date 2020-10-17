// Maximum Subarray Sum
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

// Solution 1 (not all problems passed): Find contingencies, Create sub-array dictionary

// Create function to locate any positive values
function locatePositive(arr) {
    var positiveValueFound = false;

    for (var i = 0; i < arr.length; i++) {
        if ( arr[i] > 0 ) {
            positiveValueFound = true;
        }
    }

    return positiveValueFound;
}

// Create function to find max sequence
function maxSequence(arr) {
    // first, check if the arr is empty
    if ( arr.length == 0 ) {
        return 0;
    }

    // next, check if all values in the array are negative
    if ( locatePositive(arr) == false ) {
        return 0;
    }

    // Create a dictionary to hold sub-arrays
    var subArrays = {};

    // loop through the array, and append all subarrays with a key of it's sum
    for (var i = 0; i < arr.length; i++) {
        for ( var j = i + 1; j < arr.length; j++) {
            var subArray = arr.slice(i, j + 1);
            var subArraySum = subArray.reduce(function(a, b) {return a + b;}, 0);
            subArrays[subArraySum] = subArray;
        }
    }

    // loop through dictionary to find max key
    var max_key = 0;

    for (var key in subArrays) {
        if (key > max_key) {
            max_key = key;
        }
    }

    return parseInt(max_key);
}

// Solution 2 (Complete and Better Solution): summing every value
function maxSequence(arr) {
    // Create a variable to hold max value
    var max = 0
    
    // Loop through arr, create variable sum, if sum if greater than max --> new max
    for (var i = 0; i < arr.length; i++) {
      for (var sum = 0, j = i; j < arr.length; j++) {
        sum += arr[j]
        if (sum > max) max = sum
      }
    }
    
    return max
  }

// console.log(maxSequence([]));
// console.log(maxSequence([-1, -2, -3]));
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));