// Cryptanalysis Word Patterns
// https://www.codewars.com/kata/5f3142b3a28d9b002ef58f5e/train/javascript

function wordPattern(word) {
    // Create a variable that will hold current indices
    var indices = 0;
    // create a dictionary that will hold letter:indices
    var letters = {};
    // iterate through the word and append the letter to number
    for (var i = 0; i < word.length; i++) {
        if ( !(word[i].toLowerCase() in letters) ) {
            letters[word[i].toLowerCase()] = indices.toString();
            indices++;
        }
    }
    // create an empty array to hold the indices comma separated
    var ans = [];

    // iterate through the word again, pushing letter's indices into the empyt array
    for (var i = 0; i < word.length; i++) {
        ans.push(letters[word[i].toLowerCase()]);
    }
    // return the joined version of the answer array
    return ans.join('.');
}

console.log(wordPattern("Hippopotomonstrosesquippedaliophobia"));