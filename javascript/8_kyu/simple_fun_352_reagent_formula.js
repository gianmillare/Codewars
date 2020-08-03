// Simple Fun #352: Reagent Formula
// https://www.codewars.com/kata/59c8b38423dacc7d95000008/train/javascript

function isValid(formula){

    if (formula.includes(1) && formula.includes(2)) {
      return false;
    } else if (formula.includes(3) && formula.includes(4)) {
      return false;
    } else if (formula.includes(5) != formula.includes(6)) {
      return false;
    } else if (formula.includes(7) || formula.includes(8)) {
      return true; 
    } else {
      return false;
    }
  }