// Squares Sequence
// https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript

function squares(x, n) {
    var ans = [];

    for (var i = 0; i < n; i++) {
        ans.push(x);
        var x = x**2;
    }

    return ans;
}

console.log(squares(2, 5))