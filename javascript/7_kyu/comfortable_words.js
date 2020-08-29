// Comfortable words
// https://www.codewars.com/kata/56684677dc75e3de2500002b/train/javascript

const comfortable_word = word => {

    if ( word.length <= 1 ) {
        return true;
    } else {
        const hands = {
            'left': ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b'],
            'right': ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm']
          }
          
          var ans = true;
          var left = hands['left'];
          var right = hands['right'];
          
          if ( word[0] in left ) {
            var next = left;
          } else {
            var next = right
          }
          
          for (var i = 0; i < word.length; i++) {
            if ( next.includes(word[i]) ) {
              ans = true;
            } else {
              return false;
            }
            
            if ( next == left ) {
              next = right;
            } else {
              next = left;
            }
          }
          return ans;
    }
  };

  console.log(comfortable_word('dictionary'));