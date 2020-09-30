// Are they the "same"?
// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(arr1, arr2) {
  try {
    var newArr1 = [];

    for (var i = 0; i < arr1.length; i++) {
      newArr1.push(arr1[i]**2);
    }

    var sortedArr1 = newArr1.sort(function(a, b) { return a - b });
    var sortedArr2 = arr2.sort(function(x, y) { return x - y });

    for (var i = 0; i < sortedArr1.length; i++) {
      if ( !(sortedArr1[i] == sortedArr2[i]) ) {
        return false;
      }
    }
    
    return true;

  } catch(err) {
    return false;
  }
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]))