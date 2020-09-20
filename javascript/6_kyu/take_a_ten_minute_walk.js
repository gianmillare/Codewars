// Take a Ten Minute Walk
// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

// Solution 1: Dictionary method
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

// Solution 2: Switch Case
function isValidWalk(walk) {
    var directionX = 0;
    var directionY = 0;
    var directionTime = walk.length;

    for (var i = 0; i < directionTime; i++) {
        switch (walk[i]) {
            case 'n': directionY--; break;
            case 's': directionY++; break;
            case 'w': directionX--; break;
            case 'e': directionX++; break; 
        }
    }

    return directionTime === 10 && directionX === 0 && directionY === 0;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));