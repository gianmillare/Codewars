// Where My Anagrams At?
// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

// Solution 1: Sort and Compare

// Create a sorting function to sort string
function sort_string(x) {
    return x.split("").sort().join("");
}
// run the solution using the created sorting function
function anagrams(word, words) {
    var ans = [];
    for (var i = 0; i < words.length; i++) {
        if (sort_string(words[i]) === sort_string(word)) {
            ans.push(words[i]);
        }
    }

    return ans;
}

console.log(anagrams("abba", ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams("racer", ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams("laser", ['lazing', 'lazy',  'lacer']));