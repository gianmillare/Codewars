// Array plus array
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/python

function arrayPlusArray(arr1, arr2) {
    x = arr1.reduce(function(a, b) {return a + b}, 0);
    y = arr2.reduce(function(a, b) {return a + b}, 0);
    return x + y;
}