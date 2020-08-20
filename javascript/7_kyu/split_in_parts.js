// Split In Parts
// https://www.codewars.com/kata/5650ab06d11d675371000003/train/javascript

var splitInParts = function(s, partLength){
  var ans = [];
  
  for (var i = 0; i < s.length; i += partLength) {
    ans.push(s.slice(i, i + partLength));
  }
  
  return ans.join(' ')
}

console.log(splitInParts("supercalifragilisticexpialidocious", 3))