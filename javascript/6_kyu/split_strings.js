// Split Strings
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(s) {
    // Create the main variables used throughout the solution
    s = s.split("");
    var ans = [];

    // If string is odd, append a "_"
    if ( !(s.length % 2 == 0) ) {
        s.append("_");
    }
}

console.log(solution("abcdef"));
console.log(solution("abcdefg"));