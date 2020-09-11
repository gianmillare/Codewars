// Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s) {
    words = s.split(" ");
    var ans = [];

    for (var i = 0; i < words.length; i++) {
        ans.push(words[i].length);
    }

    return Math.min(...ans);
}

// // Best Solution
// function findShort(s){
//     return Math.min.apply(null, s.split(' ').map(w => w.length));
//   }

console.log(findShort("turns out random test cases are easier than writing out basic ones"));