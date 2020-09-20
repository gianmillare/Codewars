// Array.diff
// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
    var ans = [];

    for (var i = 0; i < a.length; i ++) {
        if ( !(b.includes(a[i])) ) {
            ans.push(a[i]);
        }
    }

    return ans;
}

console.log(arrayDiff([1,2,2,2,3,4,1,1,1,1,3,3,2,2,], [1,2]))