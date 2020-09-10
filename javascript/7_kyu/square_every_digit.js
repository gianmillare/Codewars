// Square Every Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num) {
    var ans = [];
    var numbers = Array.from(String(num), Number);

    for (var i = 0; i < numbers.length; i++) {
        ans.push(numbers[i]**2);
    }

    return parseInt(ans.join(""));
}

console.log(squareDigits(9119));