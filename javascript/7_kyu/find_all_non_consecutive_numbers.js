// Find all non-consecutive numbers
// https://www.codewars.com/kata/58f8b35fda19c0c79400020f/train/javascript

function allNonConsecutive (arr) {
  var ans = []
  
  for (var i = 1; i < arr.length; i++) {
    var ans_dict = {};
    
    if ( !(arr[i - 1] == arr[i] - 1) ) {
      ans_dict['i'] = i;
      ans_dict['n'] = arr[i];
      ans.push(ans_dict);
    }
  }
  
  return ans;
}