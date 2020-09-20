// Your Order, Please
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words) {
    words = words.split(" ");
    var ans = [];

    for (var i = 1; i < words.length + 1; i++) {
        for (var j = 0; j < words.length; j++) {
            if ( words[j].includes(i.toString()) ) {
                ans.push(words[j]);
            }
        }
    }

    return ans.join(" ");
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));