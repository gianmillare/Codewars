// Halving Sum
// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript

function halvingSum(n) {
    var score = 0;
    
    while (n >= 1) {
      score += n;
      
      n = Math.floor((n * 1) / 2);
    }
    
    return score;
  }
  