// Good vs Evil
// https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript

// Objects for good values, evil values, and results caption
const valueGood = {
    0: 1,
    1: 2,
    2: 3,
    3: 3,
    4: 4,
    5: 10
};

const valueEvil = {
    0: 1,
    1: 2,
    2: 2,
    3: 2,
    4: 3,
    5: 5,
    6: 10
};

const results = {
    "good": "Battle Result: Good triumphs over Evil",
    "evil": "Battle Result: Evil eradicates all trace of Good",
    "draw": "Battle Result: No victor on this battle field"
}

// Convert the string input into an array of values
function conversion(s) {
    s = s.split(" ")
    var converted = [];

    for (var i = 0; i < s.length; i++) {
        converted.push(parseInt(s[i]));
    }

    return converted;
}

function goodVsEvil(good, evil){
    var numberOfGood = conversion(good);
    var numberOfEvil = conversion(evil);

    var scoreGood = 0;
    var scoreEvil = 0;

    for (var i = 0; i < numberOfGood.length; i++) {
        scoreGood = scoreGood + (numberOfGood[i] * valueGood[i]);
    }

    for (var i = 0; i < numberOfEvil.length; i++) {
        scoreEvil = scoreEvil + (numberOfEvil[i] * valueEvil[i]);
    }

    if (scoreGood > scoreEvil) {
        return results["good"];
    } else if (scoreEvil > scoreGood) {
        return results["evil"];
    } else {
        return results["draw"];
    }
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'));