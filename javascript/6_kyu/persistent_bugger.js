// Persistent Bugger
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function multiply(n) {
    var n_list = n.toString().split("").map(Number);

    return n_list.reduce( function(a, b) { return a * b } );
}

function persistence(num) {
    var count = 0;

    while ( num >= 10 ) {
        count++;
        var num = multiply(num);
    }

    return count;
}

console.log(persistence(999))