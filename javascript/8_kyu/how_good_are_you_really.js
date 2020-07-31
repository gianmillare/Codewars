// How good are you really
// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

function betterThanAverage(classPoints, yourPoints) {
    var average = classPoints.reduce(function (a, b) { return a + b }, 0) / classPoints.length;
    return yourPoints > average;
  }
  