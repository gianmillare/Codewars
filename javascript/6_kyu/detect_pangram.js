// Detect Pangram
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(text) {
    var alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ")

    for (var i = 0; i < text.length; i++) {
        var text = text.toLowerCase();
        if (alpha.includes(text[i])) {
            alpha.splice(alpha.indexOf(text[i]), 1);
        }
    }

    return alpha.length == 0;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a ! Pangram."));
console.log(isPangram("Pack my box with five dozen liquor jugs."));
console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"));