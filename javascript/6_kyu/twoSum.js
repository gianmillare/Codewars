// Two Sum
// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

function twoSum(n, t) {
    for (var i = 0; i < n.length; i++) {
        if ( !(i == n.length) ) {
            for (var j = i + 1; j < n.length; j++) {
                if (n[i] + n[j] == t) {
                    return [i, j];
                }
            }
        }
    }
}

console.log(twoSum([1,2,3], 4));
console.log(twoSum([1234,5678,9012], 14690));
console.log(twoSum([2,2,3], 4));