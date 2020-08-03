// Quarter of the year
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript

const quarterOf = (month) => {
    if (month <= 3 && month >= 1) {
      return 1;
    } else if (month <= 6 && month >= 4) {
      return 2;
    } else if (month <= 9 && month >= 7) {
      return 3;
    } else if (month <= 12 && month >= 10) {
      return 4;
    }
  }