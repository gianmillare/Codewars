// Find The Parity Outlier
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
    var odds = [];
    var evens = [];

    for (var i = 0; i < integers.length; i++) {
        if ( integers[i] % 2 == 0 ) {
            evens.push(integers[i]);
        } else {
            odds.push(integers[i]);
        }
    }

    if ( evens.length == 1 ) {
        return evens[0];
    } else {
        return odds[0];
    }
}

console.log(findOutlier([2,6,8,10,3]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([1,1,0,1,1]));