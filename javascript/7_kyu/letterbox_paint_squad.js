// Letterbox Paint-Squad
// https://www.codewars.com/kata/597d75744f4190857a00008d/train/javascript

var paintLetterboxes = function(start, end) {
    var arr = [];
    for (var i = start; i < end + 1; i++) {
        arr.push(String(i).split(''));
    }

    numbers = {};

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if ( arr[i][j] in numbers ) {
                numbers[arr[i][j]]++;
            } else {
                numbers[arr[i][j]] = 1;
            }
        }
    }

    var ans = [];

    for (var i = 0; i < 10; i++) {
        if ( String(i) in numbers) {
            ans.push(numbers[String(i)]);
        } else {
            ans.push(0);
        }
    }

    return ans;
}

console.log(paintLetterboxes(125, 132))