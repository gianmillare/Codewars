// Maximum Subarray Sum
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

// Solution 1: Find contingencies, Create sub-array dictionary

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
}

console.log(maxSequence([]));
console.log(maxSequence([-1, -2, -3]));
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));