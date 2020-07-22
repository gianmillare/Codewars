// Abbreviate a Two Word Name
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name) {
    // create a variable to store the answer
    var ans = [];

    // split the name into a list for first and last name
    name = name.split(' ');

    // iterate through the name to take the first letter and store into ans
    for (var i = 0; i < name.length; i ++) {
        name_split = name[i].split('');
        ans.push(name_split[0]);
    }

    // return the concatenated version of ans[0] and ans[1]
    return ans[0].toUpperCase() + "." + ans[1].toUpperCase();
}

console.log(abbrevName("Patrick Feenan"))