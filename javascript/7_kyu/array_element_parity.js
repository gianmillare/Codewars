// Array element parity
// https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/javascript

function solve(arr){
    for (var i = 0; i < arr.length; i++) {
      
      if (arr[i] < 0) {
        var num = Math.abs([arr[i]]);
      } else if (arr[i] > 0) {
        var num = arr[i] * -1;
      }

      if ( !(arr.includes(num)) ) {
          return arr[i];
      }
      
    }
};

console.log(solve([1,-1,2,-2,3]));
console.log(solve([-3,1,2,3,-1,-4,-2]));
console.log(solve([1,-1,2,-2,3,3]));
console.log(solve([-110,110,-38,-38,-62,62,-38,-38,-38]));
console.log(solve([ -9,-105,-9,-9,-9,-9,105]));