// Human Readable Time
// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

// Solution 1: While loop and Join
function humanReadable(time) {
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    while (time >= 3600) {
        hours++;
        time = time - 3600;
    }
    if (hours < 10) { hours = "0".concat(hours.toString())};

    while (time >= 60) {
        minutes++;
        time = time - 60;
    }
    if (minutes < 10) {minutes = '0'.concat(minutes.toString())};

    seconds = seconds + time;
    if (seconds < 10) {seconds = "0".concat(seconds.toString())};

    return [hours.toString(), minutes.toString(), seconds.toString()].join(":");
}


console.log(humanReadable(0));
console.log(humanReadable(5));
console.log(humanReadable(60));
console.log(humanReadable(86399));
console.log(humanReadable(359999));