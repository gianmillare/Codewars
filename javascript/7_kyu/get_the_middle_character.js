// Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
    // convert string to character array
    s = [...s];
    
    // push the letter into an empty array
    var ans = [];

    if (s.length % 2 == 0) {
        ans.push(s[Math.floor(s.length / 2) - 1]);
        ans.push(s[Math.floor(s.length / 2)]);
    } else {
        ans.push(s[Math.floor(s.length / 2)]);
    }

    return ans.join("");
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));