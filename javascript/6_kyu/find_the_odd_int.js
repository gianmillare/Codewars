// Find the Odd Int
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
    counter = {}

    for (var i = 0; i < A.length; i++) {
        if ( !(A[i] in counter) ) {
            counter[A[i]] = 1;
        } else {
            counter[A[i]]++;
        }
    }

    for (var key in counter) {
        if ( !(counter[key] % 2 == 0) ) {
            return parseInt(key);
        }
    }
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))