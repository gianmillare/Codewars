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
    var scorecard = makeScorecard();
    var words = x.split(" ");

    var scores = {};

    for (var i = 0; i < words.length; i++) {
        var count = 0;

        for (var j = 0; j < words[i].length; j++) {
            count += scorecard[words[i][j]];
        }

        scores[words[i]] = count;
    }

    var greatest = 0;

    for (var key in scores) {
        if ( scores[key] > greatest ) {
            var ans = key;
            greatest = scores[key];
        }
    }

    return ans;
}

console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("take me to semynak"));