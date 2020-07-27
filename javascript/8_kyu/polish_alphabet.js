// Polish alphabet
// https://www.codewars.com/kata/57ab2d6072292dbf7c000039/train/javascript

function correctPolishLetters(s) {
    var polish_dict = {
        'ą': 'a',
        'ć': 'c',
        'ę': 'e',
        'ł': 'l',
        'ń': 'n',
        'ó': 'o',
        'ś': 's',
        'ź': 'z',
        'ż': 'z'
    };

    var ans = [];

    for (var i = 0; i < s.length; i++) {
        if (s[i] in polish_dict) {
            ans.push(polish_dict[s[i]]);
        } else {
            ans.push(s[i]);
        }
    }

    return ans.join('');
}