// Coefficients of the Quadratic Equation
// https://www.codewars.com/kata/5d59576768ba810001f1f8d6/train/javascript


function quadratic(i, j){
    var a = 1;
    // (x-i)(x-j) --> x2, -xj, -xi, ij
    var b = -i + -j;
    var c = i * j;
    return [a, b, c];
}
