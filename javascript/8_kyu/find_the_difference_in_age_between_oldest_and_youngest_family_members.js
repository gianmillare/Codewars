// Find the Difference in Age between Oldest and Youngest Family Members
// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript

function differenceInAges(ages){
  return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
}
