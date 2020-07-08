// Holiday VIII - Duty Free
// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript

function dutyFree(normPrice, discount, hol){
    return ~~(hol / (normPrice*(discount*0.01)))
  }