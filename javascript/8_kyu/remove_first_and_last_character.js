// Remove First and Last Character
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

function removeChar(s) {
    s = s.split("");

    res = [];

    for (var i = 1; i < s.length - 1; i++) {
        res.push(s[i]);
    }

    return res.join("");
}

console.log(removeChar("eloquent"));
console.log(removeChar("country"));
console.log(removeChar("person"));
console.log(removeChar("place"));
