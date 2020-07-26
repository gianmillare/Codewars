// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

String.prototype.toAlternatingCase = function () {
    var ans = [];
    for (var i = 0; i < this.length; i++) {
      if (this[i] == this[i].toUpperCase()) {
        ans.push(this[i].toLowerCase());
      } else if (this[i] == this[i].toLowerCase()) {
        ans.push(this[i].toUpperCase());
      } else {
        ans.push(this[i]);
      }
    }
    return ans.join("");
  }