// Counting Array Elements
// https://www.codewars.com/kata/5569b10074fe4a6715000054/train/javascript

function count(array){
    var elements = {};

    for (var i = 0; i < array.length; i++) {
        if ( !(array[i] in elements) ) {
            elements[array[i]] = 1;
        } else {
            elements[array[i]]++;
        }
    }

    return elements;
}

console.log(count(['a', 'a', 'b', 'b', 'b']))