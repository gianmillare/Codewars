// Diagonals sum
// https://www.codewars.com/kata/5592fc599a7f40adac0000a8/train/javascript

function sum(matrix) {
    if (matrix.length == 0) {
        return 0;
    }

    var ans = [];
    var x = 0;
    var y = matrix[0].length - 1;
    
    for (var i = 0; i < matrix.length; i++) {
      ans.push(matrix[i][x]);
      ans.push(matrix[i][y]);
      x++;
      y--;
    }
    
    return ans.reduce(function (a, b) { return a + b });
  }

  console.log(sum([[1,2,3], [4,5,6], [7,8,9]]))