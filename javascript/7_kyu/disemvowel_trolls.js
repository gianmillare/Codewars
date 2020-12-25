// Disemvowel Trolls
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python

const vowels = "aeiouAEIOU";

function disemvowel(s) {
    s = s.split('');

    var ans = [];

    for (i = 0; i < s.length; i++) {
        if ( !(vowels.includes(s[i])) ) {
            ans.push(s[i]);
        }
    }

    return ans.join("");
}