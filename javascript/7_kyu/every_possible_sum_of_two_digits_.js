// Every possible sum of two digits
// https://www.codewars.com/kata/5b4e474305f04bea11000148/train/javascript

function digits(num){
    var arr = Array.from(String(num), Number);
    var ans = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            ans.push(arr[i] + arr[j]);
        }
    }
    return ans;
}

console.log(digits(12345));