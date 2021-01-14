// Scramblies
// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

// Solution 1
// function scramble(s1, s2) {
    
//     // Change both strings into an array
//     s1 = s1.split("");
//     s2 = s2.split("");

//     // loop through s2, if value in s1, remove the value from s1, else false
//     for (var i = 0; i < s2.length; i++) {
//         if ( !(s1.includes(s2[i])) ) {
//             return false;
//         } else {
//             var ind = s1.indexOf(s2[i]);
//             s1.splice(ind, 1);
//         }
//     }

//     return true;
// }

// Solution 2:
function create_dict(s) {
    var res = {};

    for (var i = 0; i < s.length; i++) {
        if ( !(s[i] in res) ) {
            res[s[i]] = 1;
        } else {
            res[s[i]]++;
        }
    }

    return res;
}

function scramble(s1, s2) {
    var firstDict = create_dict(s1);
    var secondDict = create_dict(s2);

    for (var key in secondDict) {
        if (key in firstDict && secondDict[key] <= firstDict[key]) {
            continue;
        } else {
            return false;
        }
    }

    return true;
    
}

console.log(scramble("rkqodlw", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("katas", "steak"));
console.log(scramble("scriptingjava", "javascript"));
console.log(scramble("klllciiegeugyjtioa", "lialgiekigjcyotuel"));