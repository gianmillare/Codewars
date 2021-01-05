// Basic Mathematical Operations
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

function basicOp(symbol, v1, v2){
    if (symbol === '+') {
        return v1 + v2;
    } else if (symbol === '-') {
        return v1 - v2;
    } else if (symbol === '*') {
        return v1 * v2;
    } else {
        return v1 / v2;
    }
}

console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));