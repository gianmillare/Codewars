// Count the smiley faces!
// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function countSmileys(arr) {
    var count = 0;
    const face = {0: [":", ";"], 1: ["-", "~"], 2: [")", "D"]};

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length == 2) {
            if ( face[0].includes(arr[i].slice(0, 1)) && face[2].includes(arr[i].slice(-1)) ) {
                count++;
            }
        } else if (arr[i].length == 3) {
            if ( face[0].includes(arr[i].slice(0, 1)) && face[1].includes(arr[i].slice(1,2)) && face[2].includes(arr[i].slice(-1)) ) {
                count++;
            }
        }
    }

    return count;
}

console.log(countSmileys([':D',':~)',';~D',':)']));
console.log(countSmileys([':)',':(',':D',':O',':;']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));