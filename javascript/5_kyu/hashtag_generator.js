// The Hashtag Generator
// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

// Here's the deal:
//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

function generateHashtag(s) {
    // Fulfill first contingency
    if (s.length == 0) {
        return false;
    }

    // Remove leading and trailing zeroes, and change string to an array
    s = s.trim().split("");

    // Create an empty array for the answer
    var ans = [];

    // Create a variable space that will initially be true
    var space = true;

    // Loop through the array, appending values, and uppercasing values if space is true, true changes according to previous value
    for (var i = 0; i < s.length; i++) {
        // append the value if it is not a space, but if space is true, uppercase the letter
        if ( !(s[i] == " ") ) {
            if (space) {
                ans.push(s[i].toUpperCase());
                space = false;
            } else {
                if (s[i] == s[i].toUpperCase()) {
                    ans.push(s[i].toLowerCase());
                } else {
                    ans.push(s[i]);
                }
            }
        } else {
            space = true;
        }
    }

    // Throw a hashtag in front of the array
    ans.unshift("#");

    // Join the answer array
    ans = ans.join("");

    // If the answer is over 140 characters long, return false
    if (ans.length >= 140) {
        return false;
    }

    return ans;

}

console.log(generateHashtag(""));
console.log(generateHashtag("Codewars"));
console.log(generateHashtag("Codewars Is Nice"));
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong"));