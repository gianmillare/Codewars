// Directions Reduction
// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

// Solution 1: Recursion
function dirReduc(arr) {
    var directions = arr.join(" ");
    var directionsV2 = directions.replace("NORTH SOUTH", "").replace("SOUTH NORTH", "").replace("EAST WEST", "").replace("WEST EAST", "").split(" ");
    var directionsV3 = directionsV2.filter(function (x) { return x != "" });

    if ( directionsV3.length < arr.length ) {
        return dirReduc(directionsV3);
    } else {
        return directionsV3;
    }
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));