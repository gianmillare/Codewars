// Count the Digit
// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

function nbDig(n, d) {
    var ans = [];

    for (var i = 0; i <= n; i++) {
        var num = i**2;
        ans.push(num.toString());
    }
    
    var res = ans.join('');
    var count = 0;

    for (var j = 0; j < res.length; j++) {
        if (res[j] == d.toString()) {
            count++;
        }
    }
    return count;
}

console.log(nbDig(10, 1));