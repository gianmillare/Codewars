// Weight for Weight
// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

function sumDigits(s) {
    return s.split("").reduce(function(a, b) { return a + parseInt(b) }, 0);
}

function orderWeight(string_of_weights) {
    return string_of_weights.split(" ").sort(function(a, b) {
        return sumDigits(a) - sumDigits(b) || a.localeCompare(b);
    }).join(" ");
}

console.log(orderWeight("103 123 4444 99 2000"));
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));

// Note: Harder than usual challenge. Study thoroughly