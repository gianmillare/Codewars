// L1: Bartender, drinks!
// https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript

const drinks = {
    "Jabroni": "Patron Tequila",
    "School Counselor":	"Anything with Alcohol",
    "Programmer": "Hipster Craft Beer",
    "Bike Gang Member":	"Moonshine", 
    "Politician": "Your tax dollars", 
    "Rapper": "Cristal",
};

function getDrinkByProfession(param){
    var paramList = param.toLowerCase().split(' ');

    var paramCap = [];

    for (i = 0; i < paramList.length; i++) {
        paramCap.push(paramList[i][0].toUpperCase() + paramList[i].slice(1));
    }

    var searchFor = paramCap.join(' ');

    if (searchFor in drinks) {
        return drinks[searchFor];
    } else {
        return "Beer";
    }
}

console.log(getDrinkByProfession("prOgramMer"))