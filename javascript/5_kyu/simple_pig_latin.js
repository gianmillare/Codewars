// Simple Pig Latin
// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

// Solution 1: Index and Append
function isAlpha(word) {
    return /^[a-zA-Z]+$/.test(word);
}

function pigIt(str) {
    str = str.split(" ");
    var ans = [];
    
    for (var i = 0; i < str.length; i++) {
        if ( isAlpha(str[i]) ) {
            var switched = str[i].slice(1).concat(str[i].slice(0, 1));
            ans.push(switched.concat("ay"));
        } else {
            ans.push(str[i]);
        }
    }

    return ans.join(" ");
}

console.log(pigIt("Pig latin is cool"));
console.log(pigIt("This is my string"));
console.log(pigIt("Hello world !"));