// Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
    var lowercase = 0;
  var ans = [];
  
  for (var i = 0; i < s.length; i++) {
      var x = s[i].toUpperCase();
      var y = s[i].toLowerCase().repeat(lowercase);
      lowercase++;

      ans.push(x.concat(y));
  }
  
  return ans.join('-');
}

console.log(accum("ZpglnRxqenU"))