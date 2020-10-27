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
        array.splice(0, 1);
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