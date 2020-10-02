// Bit Counting
// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

function count(n) {
    var count = 0;
    for ( var i = 0; i < n.length; i++ ) {
        if ( n[i] == "1" ) {
            count++;
        }
    }
    return count;
}

function countBits(n) {
    var bit_number = n.toString(2).split("");
    return count(bit_number);
}

console.log(countBits(1234));
console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));