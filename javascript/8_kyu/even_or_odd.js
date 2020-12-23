// Even or Odd
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

function even_or_odd(n) {
    var res;
    if (n % 2 === 0) {
        res = "Even";
    } else {
        res = "Odd";
    }
    return res;
}

console.log(even_or_odd(2));
console.log(even_or_odd(7));