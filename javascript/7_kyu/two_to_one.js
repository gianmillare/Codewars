// Two to One
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
    var list_s1 = s1.split("");
    var s1_set = [];

    for (var i = 0; i < list_s1.length; i++) {
        if ( !(s1_set.includes(list_s1[i])) ) {
            s1_set.push(list_s1[i]);
        }
    }

    for (var i = 0; i < s2.length; i++) {
        if ( !(s1_set.includes(s2[i])) ) {
            s1_set.push(s2[i]);
        }
    }

    return s1_set.sort().join('');
}

// // Best Solution
// function longest(s1, s2) {
//     return Array.from(new Set(s1 + s2)).sort().join('');
//   }

console.log(longest("aretheyhere", "yestheyarehere"));