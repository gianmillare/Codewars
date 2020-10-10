// Highest Scoring Word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function makeScorecard(){
    var alpha = "abcdefghijklmnopqrstuvwxyz";

    var point = 1;
    var points = {};

    for (var i = 0; i < alpha.length; i++) {
        points[alpha[i]] = point;
        point++;
    }

    return points;
}

function high(x) {

}

console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("take me to semynak"));