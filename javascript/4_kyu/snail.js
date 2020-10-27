// Snail
// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

// declare a global variable to use over recursive solution
var results = [];

// will use recucursion to solve the snail trail
function snail(array) {
    // The first steps of the trail will always be the first array
    if (array) {
        // push the values into an array that will hold values per recursion
        var ans = [];
        for (var i = 0; i < array[0].length; i++) {
            ans.push(array[0][i]);
        }
        // remove the values that were pushed into ans
        array.splice(0, 1);
    }

    // loop through the array and push values into ans equal to the last value of each sub-array
    if (array) {
        for (var i = 0; i < array.length; i++) {
            // get the metrics of the last value of the sub-array --> length of subarray - 1
            var array_length = array[i].length;
            // Assign the last value to a variable
            var value_to_push = array[i][array_length - 1];
            // push the value into ans
            ans.push(value_to_push);
            // remove the value that was pushed into ans
            array[i].splice(array_length - 1, 1);
        }
    }

    console.log(array);
    return ans;
}

console.log(snail([[1,2,3],
                   [4,5,6],
                   [7,8,9]]));

// console.log(snail([[1,2,3],
//     [8,9,4],
//     [7,6,5]]));
    
// console.log(snail([[1,2,3,1],
//     [4,5,6,4],
//     [7,8,9,7], 
//     [7,8,9,7]]));