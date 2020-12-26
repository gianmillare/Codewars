// Split Strings
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(s) {
    // Create the main variables used throughout the solution
    s = s.split("");
    var ans = [];

    // If string is odd, append a "_"
    if ( !(s.length % 2 == 0) ) {
        s.push("_");
    }

    // loop through list s and append to ans every two characters
    for (i = 0; i < s.length; i+=2) {
        ans.push(s[i].concat(s[i+1]));
    }

    return ans;
}

console.log(solution("abcdef"));
console.log(solution("abcdefg"));