// Pete, The Baker
// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
    var cakesMade = {};

    for ( const [key, value] of Object.entries(recipe) ) {
        if ( key in  available ) {
            cakesMade[key] = 0;
            if ( recipe[key] <= available[key] ) {
                available[key] = available[key] - recipe[key];
                cakesMade[key]++;
            }
        } else {
            return 0;
        }
    }

    
}

console.log(cakes({"flour": 500, "sugar": 200, "eggs": 1}, {"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200}));
console.log(cakes({"apples": 3, "flour": 300, "sugar": 150, "milk": 100, "oil": 100}, {"sugar": 500, "flour": 2000, "milk": 2000}));