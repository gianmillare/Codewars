// Pete, The Baker
// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

// Solution 1: Create dictionary and find Min
function cakes(recipe, available) {

    // Create new dictionary for answers
    var cakesMade = {};

    // loop through recipe values and find matches in available
    for ( const [key, value] of Object.entries(recipe) ) {
        if ( key in  available ) {
            cakesMade[key] = 0;

            // while available amount is greater than recipe amount, subtract and increment
            while ( recipe[key] <= available[key] ) {
                available[key] = available[key] - recipe[key];
                cakesMade[key]++;
            }
        } else {
            return 0;
        }
    }

    // set the minimum value
    var minimum_cakes = cakesMade[Object.keys(cakesMade)[0]];

    // if entries are smaller than minimum value, set minimum value to new min
    for ( const [key, value] of Object.entries(cakesMade) ) {
        if ( cakesMade[key] < minimum_cakes ) {
            minimum_cakes = cakesMade[key];
        }
    }

    return minimum_cakes;
}

console.log(cakes({"flour": 500, "sugar": 200, "eggs": 1}, {"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200}));
console.log(cakes({"apples": 3, "flour": 300, "sugar": 150, "milk": 100, "oil": 100}, {"sugar": 500, "flour": 2000, "milk": 2000}));