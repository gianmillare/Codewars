// Moving Zeros To The End
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

// Solution 1: typeof + concat
function moveZeros(arr) {
    var nonZeros = [];
    var zeros = [];

    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "boolean" || arr[i] !== 0) {
            nonZeros.push(arr[i]);
        }
    }

    for (var zero = 0; zero < arr.length; zero++) {
        if (typeof arr[zero] === "number" && arr[zero] === 0) {
            zeros.push(arr[zero]);
        }
    }

    return nonZeros.concat(zeros);
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
console.log(moveZeros([ 1, [], 2, 1, 1, 3, 1, 0, 0, 0, 0 ]));
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));