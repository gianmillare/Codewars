// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number = function(array) {
    if ( array.length == 0 ) {
        return ans = [];
    } else {
        var seq = 1;
        var ans = [];

        for (var i = 0; i < array.length; i++) {
            ans.push(seq.toString() + ": " + array[i]);
            seq++;
        }
    }

    return ans
}

console.log(number(["a", "b", "c"]))