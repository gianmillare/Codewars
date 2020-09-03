// Sum of Array Singles
// https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript

function repeats(arr) {
    var numbers = {};
    var ans = [];

    for (var i = 0; i < arr.length; i++) {
        if ( arr[i] in numbers ) {
            numbers[arr[i]]++;
        } else {
            numbers[arr[i]] = 1;
        }
    }

    for (var key in numbers) {
        if ( numbers[key] == 1 ) {
            ans.push(parseInt(key));
        }
    }

    return ans.reduce( function(a, b) { return a + b } );
}

console.log(repeats([4,5,7,5,4,8]))