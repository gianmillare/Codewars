// GCD sum
// https://www.codewars.com/kata/5dd259444228280032b1ed2a/train/javascript

function solve(s,g) {
    var ans = [];

    if ( (s % g == 0) || (g % s == 0) ){
        for (var i = g; i < s; i++) {
            if (i % g == 0) {
                ans.push(i);
                break;
            }
        }
    
        for (var i = g; i < s; i++) {
            if (i + ans[0] == s) {
                ans.push(i);
                break;
            }
        }
        return ans;

    } else {
        return -1;
    }
}

console.log(solve(6,3));

// Best Answer
// function solve(x, y) {
//     return x % y ? -1 : [y, x - y];
//   }