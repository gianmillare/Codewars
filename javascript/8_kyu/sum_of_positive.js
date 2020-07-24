// Sum of positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/python

function positiveSum(arr) {
    var ans = [];

    if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                ans.push(arr[i]);
            }
        }
        
        if (ans.length > 0) {
            return ans.reduce(function(a, b) {return a + b});
        } else {
            return 0;
        }
    } else {
      return 0;
    }
}