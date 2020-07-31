// No zeros for heros
// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

function noBoringZeros(n) {
    var n = n.toString();
    var lis_n = n.split('');
  
    if (n.length == 1) {
      return parseInt(n);
    }

    for (var i = lis_n.length - 1; i >= 0; i--) {
      if (lis_n[i] == 0) {
        lis_n.pop();
      } else {
        return parseInt(lis_n.join(''));
      }
    }
    return parseInt(lis_n.join(''));
  }