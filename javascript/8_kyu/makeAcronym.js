// makeAcronym
// https://www.codewars.com/kata/557efeb04effce569d000022/train/javascript

var makeAcronym = function(string){
    if (!(typeof string === 'string')) {
      return 'Not a string';
    }

    var ans = [];
    var lis = string.split(' ');

    for (var i = 0; i < lis.length; i++) {
        if (/^[a-zA-Z]+$/.test(lis[i]) == true) {
            ans.push(lis[i][0].toUpperCase());
        } else {
            return 'Not letters';
        }
    }
    return ans.join('');
};

console.log(makeAcronym('Hello codewarrior'));