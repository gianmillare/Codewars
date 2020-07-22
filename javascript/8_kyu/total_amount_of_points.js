// Total amount of points
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/python

function points(games) {
    var points = 0;
    for (var i = 0; i < games.length; i++) {
        ratio = games[i].split(":");
        wins = parseInt(ratio[0]);
        loss = parseInt(ratio[1]);
        if (wins > loss) {
            points += 3;
        } else if (wins == loss) {
            points++;
        }
    }
    return points;
}

console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]))