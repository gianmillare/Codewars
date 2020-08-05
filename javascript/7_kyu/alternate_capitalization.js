// Alternate capitalization
// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

function capitalize(s) {
    var even_cap = [];
    var odd_cap = [];

    for (var i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            even_cap.push(s[i].toUpperCase());
            odd_cap.push(s[i]);
        } else {
            odd_cap.push(s[i].toUpperCase());
            even_cap.push(s[i]);
        }
    }

    return [even_cap.join(''), odd_cap.join('')];
}

console.log(capitalize("codewars"));