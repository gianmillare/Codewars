// Find The Missing Letter
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

function findMissingLetter(array) {
    var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphabet = alphabet.split("");

    var start = alphabet.map(function(x) {return x}).indexOf(array[0]);

    const subArray = alphabet.slice(start, start + array.length);

    for (var i = 0; i < subArray.length; i++) {
        if ( !(subArray[i] == array[i]) ) {
            return subArray[i];
        }
    }
}

console.log(findMIssingLetter(['a','b','c','d','f']))
console.log(findMIssingLetter(['O','Q','R','S']))