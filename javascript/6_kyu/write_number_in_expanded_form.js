// Write Number in Expanded Form
// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

// Solution 1: Iterate and Concatenate
function expandedForm(n) {
    n = n.toString().split("");
    var exp = [];
    
    for (var i = 0; i < n.length; i++) {
        if ( !(n[i] == '0') ) {
            var zeroes = '0'.repeat(n.length - (i + 1));
            exp.push(n[i].concat(zeroes));
        }
    }

    return exp.join(" + ");
}

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));