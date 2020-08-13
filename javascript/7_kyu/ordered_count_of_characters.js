// Ordered Count of Characters
// https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript

var orderedCount = function (text) {
    // create an array to hold letters
    var letters = [];
    // create an array to hold the pairing
    var ans = [];

    // iterate through the text to append unique values into letters array
    for (var i = 0; i < text.length; i++) {
        if ( !(letters.includes(text[i])) ) {
            letters.push(text[i]);
        }
    }
    // iterate through letters array, matching the letter to the text, and increment count for each match
    for (var i = 0; i < letters.length; i++) {
        var count = 0;
        for (var j = 0; j < text.length; j++) {
            if (text[j] == letters[i]) {
                count++;
            }
        }
        // push the letter and count pairing into the answers array
        ans.push([letters[i], count]);
    }

    return ans;
}

console.log(orderedCount("abracadabra"))