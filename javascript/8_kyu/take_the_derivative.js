// Take the Derivative
// https://www.codewars.com/kata/5963c18ecb97be020b0000a2/train/javascript

function derive(x,y) {
    var product = x * y;
    var exponent = y - 1;
    return product.toString() + "x^" + exponent.toString();
  }