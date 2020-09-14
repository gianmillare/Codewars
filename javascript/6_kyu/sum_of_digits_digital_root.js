// Sum of Digits / Digital Root
// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function sum_if_greater_than_10(num) {
    var arr = num.toString().split("").map(Number);
    return arr.reduce( function(a, b) {return a + b}, 0 );
}

function digital_root(n) {
    while ( n >= 10 ) {
        n = sum_if_greater_than_10(n);
    }

    return n;
}

console.log(digital_root(493193))