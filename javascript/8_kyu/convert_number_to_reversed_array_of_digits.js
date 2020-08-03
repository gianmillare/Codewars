// Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {
    var lis = n.toString().split('');
    var ans = [];
    for (var i = 0; i < lis.length; i++) {
      ans.push(parseInt(lis[i]));
    }
    
    return ans.reverse();
  }