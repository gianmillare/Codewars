// Find the first non-consecutive number
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

function firstNonConsecutive (arr) {
    otherArr = [];
    for (var i = arr[0]; i <= arr[arr.length - 1]; i++) {
        otherArr.push(i);
    }

    for (var j = 0; j <= arr.length; j++) {
        if (arr[j] == otherArr[j]) {
            {};
        } else {
            return arr[j];
        }
    }
  return null;
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]));