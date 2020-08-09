// Simple string reversal II
// https://www.codewars.com/kata/5a8d1c82373c2e099d0000ac/train/javascript

function solve(st,a,b){
    var first = [];
    var last = [];
    var flip = [];
    
    for (var i = 0; i < st.length; i++) {
      if (i >= a && i <= b) {
        flip.push(st[i]);
      } else if (i < a) {
        first.push(st[i]);
      } else {
        last.push(st[i]);
      }
    }
    
    flip.reverse();
    
    var x = first.join('');
    var y = flip.join('');
    var z = last.join('');
    
    return x + y + z;
  }
    