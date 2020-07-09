// Smallest unused ID
// https://www.codewars.com/kata/55eea63119278d571d00006a/train/javascript

function nextId(ids){
  var count = 0;
  
  while (ids.includes(count)) {
    count += 1;
  }
  
  return count;
}