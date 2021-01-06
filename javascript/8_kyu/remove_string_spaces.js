// Remove String Spaces
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

function noSpace(s) {
    return s.replace(/ /g, "");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(noSpace("8aaaaa dddd r     "));
console.log(noSpace("8j aam"));