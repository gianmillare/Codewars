// What's the real floor?
// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(n) {
    if (n < 0) {
      return n;
    } else if (n == 0) {
      return 0;
    } else if (n < 13) {
      return n - 1;
    } else if (n == 14) {
      return 12;
    } else {
      return n - 2;
    }
  }