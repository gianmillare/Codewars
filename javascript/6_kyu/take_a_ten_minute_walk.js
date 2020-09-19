// Take a Ten Minute Walk
// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
    if ( !(walk.length == 10) ) {
        return false;
    } 

    var directions = {};

    for (var i = 0; i < walk.length; i++) {
        if (walk[i] in directions) {
            directions[walk[i]]++;
        } else {
            directions[walk[i]] = 1;
        }
    }

    if ( !(directions['n'] == directions['s']) || !(directions['w'] == directions['e']) ) {
        return false;
    }

    return true;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));