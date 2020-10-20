// Rot13
// https://www.codewars.com/kata/530e15517bc88ac656000716/train/python

// Solution 1: Hard Coding dictionary and Encryption
// Create function to make cypher dictionary
function encode(arr){
    var cypher = {}
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        cypher[count] = arr[i];
        count++;
    }

    return cypher;
}

// Create function to check if character is alphabetic
function isAlpha(x) {
    return /[A-Za-z]/.test(x);
}

function rot13(message) {
    var cypherLowercase = encode("abcdefghijklmnopqrstuvwxyz");
    var cypherUppercase = encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    message = message.split("");
    var res = [];

    for (var i = 0; i < message.length; i++) {
        if ( isAlpha(message[i]) && message[i] == message[i].toUpperCase() ) {
            for (const [key, value] of Object.entries(cypherUppercase) ) {
                if ( message[i] == value ) {
                    var encryptedChar = parseInt(key);
                    res.push(encryptedChar);
                }
            }
        }
    }

    return res;
}

console.log(rot13("test"));
console.log(rot13("Test"));