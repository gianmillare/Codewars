// Multiples of 3 or 5
// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(num) {
    var ans = [];

    for (var i = 0; i < num; i++) {
        if ( i % 3 == 0 || i % 5 == 0) {
            ans.push(i);
        }
    }

    return ans.reduce( function(a, b) { return a + b; }, 0);
}

console.log(solution(10));