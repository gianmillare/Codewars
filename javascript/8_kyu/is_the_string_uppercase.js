// Is the string uppercase?
// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

String.prototype.isUpperCase = function() {
    var ans = [];
    
    for (var i = 0; i < this.length; i++) {
      ans.push(this[i].toUpperCase());
    }
    
    return this == ans.join("");
  }