// Triple Trouble
// https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

function tripleTrouble(one, two, three){
  var ans = [];
  for (var i = 0; i < one.length; i++) {
    ans.push(one[i]);
    ans.push(two[i]);
    ans.push(three[i]);
  }
  
  return ans.join('')
 }