// Indexed capitalization
// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript

function capitalize(s, arr) {
    var ans = [];
    for (var i = 0; i < s.length; i++) {
        if (arr.includes(i)) {
            ans.push(s[i].toUpperCase());
        } else {
            ans.push(s[i]);
        }
    }

    return ans.join('');

}

console.log(capitalize("abcdef",[1,2,5]));
console.log(capitalize("abcdef",[1,2,5,100]));