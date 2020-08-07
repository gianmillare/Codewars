// Fix string case
// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

function solve(s){
    var uppercase = 0;
    var lowercase = 0;
    
    for (var i = 0; i < s.length; i++) {
      if (s[i] == s[i].toUpperCase()) {
        uppercase++;
      } else {
        lowercase++;
      }
    }
    
    var ans = [];
    
    if (lowercase >= uppercase) {
      for (var i = 0; i < s.length; i++) {
        if (s[i] == s[i].toUpperCase()) {
          ans.push(s[i].toLowerCase());
        } else {
          ans.push(s[i]);
        }
      }
    } else if (lowercase < uppercase) {
      for (var i = 0; i < s.length; i++) {
        if (s[i] == s[i].toUpperCase()) {
          ans.push(s[i]);
        } else {
          ans.push(s[i].toUpperCase());
        }
      }
    }
    
    return ans.join('');
  }