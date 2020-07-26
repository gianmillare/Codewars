// SpeedCode #2 - Array Madness
// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript

function arrayMadness(a, b) {
    var ans_a = [];
    var ans_b = [];

    for (var i = 0; i < a.length; i++) {
        ans_a.push(a[i] ** 2);
    }

    for (var i = 0; i < b.length; i++) {
        ans_b.push(b[i] ** 3);
    }
    
    return ans_a.reduce((a, b) => a + b, 0) >= ans_b.reduce((a, b) => a + b, 0);
  }

console.log(arrayMadness([1,3,5,2,4], [2,2,2,2,2,2,2,1]))