// Removing Elements
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

function removeEveryOther(arr){
  var ans = [];
  
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      ans.push(arr[i]);
    } 
  }
  
  return ans;
}