// Grasshopper - Grade book
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

function getGrade (s1, s2, s3) {
  // place all arguments into an array
  var grades = [s1, s2, s3];
  //   iterate through all arguments, adding them, and then divide by the length(3)
  var score =  (grades.reduce(function (a, b) { return a + b }, 0) / grades.length);
  // if statement to output a string letter grade
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}