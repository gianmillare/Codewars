// Isograms
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str) {
    // create a set out of the string, ensuring that the elements of the set are lowercase
    unique = new Set(str.toLowerCase());

    // revert the set into an array and compare its length to the length of the original string
    return str.length == [...unique].length;
}

console.log(isIsogram("Dermatoglyphics"));