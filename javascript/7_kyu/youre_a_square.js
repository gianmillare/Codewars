// You're a square!
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

function isSquare(n){
    if (n >= 0) {
        var sqrt = Math.sqrt(n);
        return sqrt - parseInt(sqrt) === 0;
    } else {
        return false;
    }
}

console.log(isSquare(-1));
console.log(isSquare( 0));
console.log(isSquare( 4));
console.log(isSquare(26));