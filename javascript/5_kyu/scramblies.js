// Scramblies
// 

function scramble(s1, s2) {
    
    // Change both strings into an array
    s1 = s1.split("");
    s2 = s2.split("");

    // loop through s2, if value in s1, remove the value from s1, else false
    for (var i = 0; i < s2.length; i++) {
        if ( !(s1.includes(s2[i])) ) {
            return false;
        } else {
            var ind = s1.indexOf(s2[i]);
            s1.splice(ind, 1);
        }
    }

    return true;
}

console.log(scramble("rkqodlw", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("katas", "steak"));
console.log(scramble("scriptingjava", "javascript"));
console.log(scramble("klllciiegeugyjtioa", "lialgiekigjcyotuel"));