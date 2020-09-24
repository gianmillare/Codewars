// Does my number look big in this?
// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
    const expo = value.toString().length
    var n = Array.from(String(value), Number);
    var ans = 0;
    
    for (var i = 0; i < n.length; i++) {
        ans += n[i] ** expo;
    }

    return value == ans;
}

console.log(narcissistic(7));
console.log(narcissistic(371));
console.log(narcissistic(122));
console.log(narcissistic(4887));