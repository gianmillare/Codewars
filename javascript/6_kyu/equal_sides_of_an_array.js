// Equal Sides Of An Array
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function findEvenIndex(arr) {
    for (var i = 0; i < arr.length; i++) {
        var firstHalf = arr.slice(0, i);
        var secondHalf = arr.slice(i + 1);

        if ( firstHalf.reduce((a, b) => a + b, 0) == secondHalf.reduce((a, b) => a + b, 0) ) {
            return i;
        }
    }

    return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([20,10,-80,10,10,15,35]));
console.log(findEvenIndex([1,2,3,4,5,6]));
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]));