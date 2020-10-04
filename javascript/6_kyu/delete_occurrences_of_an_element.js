// Delete Occurrences of an Element... More than N Times
// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function count(array, num) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if ( array[i] == num ) {
            count++;
        }
    }
    return count;
}

function deleteNth(seq, n) {
    var ans = [];

    for (var i = 0; i < seq.length; i++) {
        var occurrence = count(ans, seq[i]);

        if ( occurrence < n ) {
            ans.push(seq[i]);
        }
    }

    return ans;
}

console.log(deleteNth([20,37,20,21], 1));
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));