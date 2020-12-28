// Format a string of names like 'Bart, Lisa & Maggie'.
// https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

function list(names) {
    // handle contingencies of array length of 0, 1, & 2
    if (names.length === 0) {
        return "";
    } else if (names.length === 1) {
        return names[0].name;
    } else if (names.length === 2) {
        return names[0].name.concat(" & ".concat(names[1].name));
    } else {
        // if the length of names is more than 3, add commas to the end of each string, excluding last two
        ans = [];

        for (var i = 0; i < names.length - 2; i++) {
            ans.push(names[i].name.concat(","));
        }

        // concatenate the last two names with an ampersand
        ans.push(names[names.length - 2].name.concat(" & ".concat(names[names.length - 1].name)));

        return ans.join(" ");
    }
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]));
console.log(list([{name: 'Bart'},{name: 'Lisa'}]));
console.log(list([{name: 'Bart'}]));
console.log(list([]));