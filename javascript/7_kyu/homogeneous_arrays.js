// Homogenous arrays
// https://www.codewars.com/kata/57ef016a7b45ef647a00002d/train/javascript

function filterHomogenous(arrays) {
  var ans = [];

  for (var i = 0; i < arrays.length; i++) {
    if ( arrays[i].length >= 1 ) {
      var char_type = typeof arrays[i][0];

      for (var j = 0; j < arrays[i].length; j++) {
        var match = true;
        if ( !(typeof arrays[i][j] == char_type) ) {
          match = false;
          break;
        }
      }
      if (match == true) {
        ans.push(arrays[i]);
      }
    }
  }
  return ans;
}

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));

// // Best Solution
// let filterHomogenous = a => a.filter(b => b.length > 0 && b.every(e => typeof e == typeof b[0]));