// Exclamation marks series #3: Remove all exclamation marks from sentence except at the end
// https://www.codewars.com/kata/57faefc42b531482d5000123/train/javascript

function remove(s) {
  var arr = [];

  for (var i = 0; i < s.length; i++) {
    if ( !(s[i] == "!") ) {
      arr.push(s[i])
    }
  }

  var arr_epoint = [];

  for (var i = s.length - 1; i >= 0; i--) {
    if (s[i] == "!") {
      arr_epoint.push(s[i]);
    } else {
      break;
    }
  }

  return arr.join("") + arr_epoint.join("");
}

// // Best Solution

// function remove(s) {
//   return s.replace(/!+(?!!*$)/g, '');
// }

console.log(remove("!Hi!"))