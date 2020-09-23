// Unique In Order
// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

function uniqueInOrder(iterable) {
  if (iterable.length > 0) {
    var ans = [iterable[0]];
    var prev = iterable[0];

    for (var i = 1; i < iterable.length; i++) {
      if ( !(iterable[i] == prev) ) {
        ans.push(iterable[i]);
        prev = iterable[i];
      }
    }
    return ans;
  } else {
    return [];
  }
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));