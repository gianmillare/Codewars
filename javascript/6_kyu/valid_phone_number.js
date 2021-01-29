// Valid Phone Number
// https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/javascript

function validPhoneNumber(s) {
    s = s.split("");
    var result = [];
    var template = "(xxx) xxx-xxxx";
    var digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    for (var i = 0; i < s.length; i++) {
        if ( digits.includes(s[i]) ) {
            result.push("x");
        } else {
            result.push(s[i]);
        }
    }

    return result.join("") == template;
}

console.log(validPhoneNumber("(123) 456-7890"));
console.log(validPhoneNumber("(1111)555 2345"));
console.log(validPhoneNumber("(098) 123 4567"));