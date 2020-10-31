// Human Readable Duration Format
// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

// Declare the global variables
const yearToSec = 31536000;
const dayToSec = 86400;
const hourToSec = 3600;
const minToSec = 60;

// function to change numerical values from dictionary into human speech
function human_format(format) {
    human_speech = [];

    for (var key in format) {
        if ( !(format[key] == 0) ) {
            if (format[key] == 1) {
                human_speech.push( format[key].toString().concat(" ").concat(key) );
            } else {
                human_speech.push( format[key].toString().concat(" ").concat(key).concat("s") );
            }
        }
    }
    return human_speech;
}

// Main Function
function formatDuration(t) {
    // Create the dictionary that will hold the amount needed in each duration
    var format = {
        "year": 0,
        "day": 0,
        "hour": 0,
        "minute": 0,
        "second": 0
    };

    // if t is zero, return "now"
    if ( t == 0 ) {
        return "now";
    }

    // if t does not equal zero, then decrement functions
    while ( !(t == 0) ) {
        // format if time is greater than seconds in years
        if (t >= yearToSec) {
            format["year"] = parseInt(t / yearToSec);
            t = t - (format["year"] * yearToSec);
        }

        // format if time is greater than seconds in days
        if (dayToSec <= t < yearToSec) {
            format["day"] = parseInt(t / dayToSec);
            t = t - (format["day"] * dayToSec);
        }

        // format if time is greater than seconds in an hour
        if (hourToSec <= t < dayToSec) {
            format["hour"] = parseInt(t / hourToSec);
            t = t - (format["hour"] * hourToSec);
        }

        // format if time is greated than seconds in a minute
        if (minToSec <= t < hourToSec) {
            format["minute"] = parseInt(t / minToSec);
            t = t - (format["minute"] * minToSec); 
        }

        // format if seconds is less than 60
        if (t < minToSec) {
            format["second"] = t;
            t = 0;
        }
    }
    
    results = human_format(format);

    var format = {
        "year": 0,
        "day": 0,
        "hour": 0,
        "minute": 0,
        "second": 0
    };

    if (results.length == 1) {
        return results[0];
    } else {
        concatAndElement = " and ".concat(results.splice(results.length - 1));
        return results.join(", ").concat(concatAndElement);
    }
}

console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3600));
console.log(formatDuration(3662));
console.log(formatDuration(86404));
console.log(formatDuration(31536003));