// String incrementer
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString(s) {

    // store the original array
    original = s;
    
    // if string is empty, return "1"
    if (s.length == 0) {
        return "1";
    }

    // if the last letter is a letter, return the string itself + 1
    s = s.split("");
    if (s[s.length - 1].match(/[a-zA-Z]+/g)) {
        s.push("1");
        return s.join("");
    }

    // if the last value is a number
    // first reverse the string array
    reversed_array = s.reverse();

    // create arrays to hold the answer, and increment index of numbers
    var ans = [];
    var ind = 0;

    // loop through the array, if you find a digit, increment ind until not int is found
    for (var i = 0; i < reversed_array.length; i++) {
        if ( !(isNaN(reversed_array[i])) ) {
            ind++;
        } else {
            break;
        }
    }

    // create the starting index of the original array
    var startInc = s.length - ind;

    // create a variable to hold the integer at the end, and increment by 1, then create an array using the result
    var n = parseInt(original.substring(startInc, s.length)) + 1;
    n = n.toString().split("");
    
    // while the length of the substring is greater than length of n, append 0 to the front of the array
    while (ind > n.length) {
        n.unshift("0");
    }

    return n;
}

// console.log(incrementString("foo"));
console.log(incrementString("foobar001"));
// console.log(increment_string("foobar99"));
// console.log(increment_string("foobar099"));
// console.log(increment_string(""));
// console.log(increment_string("1s]X>016507.Wiw=T3y67581487bNqji_*C8190579O RA7663Z2Qi~O896nU~/489027691861674357bcT304345054"));