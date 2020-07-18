// Expressions Matter
// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript

function expressionMatter(a, b, c) {
    var ans = [];
    ans.push(a + b + c);
    ans.push(a * b * c);
    ans.push(a + b * c);
    ans.push(a * b + c);
    ans.push((a + b) * c);
    ans.push(a * (b + c));

    var max = ans.reduce(function (a, b) {return Math.max(a, b)});

    return max;
}

console.log(expressionMatter(1, 3, 1));