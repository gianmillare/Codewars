// Persistent Bugger
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function multiply(n) {
    var n_list = n.toString().split("").map(Number);

    return n_list.reduce( function(a, b) { return a * b } );
}

function persistence(num) {
    var count = 0;

    while ( num >= 10 ) {
        count++;
        var num = multiply(num);
    }

    return count;
}

// Alternative: Using one function
// function persistence(num) {
//     var times = 0;
    
//     num = num.toString();
    
//     while (num.length > 1) {
//       times++;
//       num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//     }
    
//     return times;
//  }

console.log(persistence(999))