// Count characters in your string
// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count(s) {
    if (s === "") {
        return {};
    } else {
        var ans = {};
        s = s.split("");
        for (var i = 0; i < s.length; i++) {
            if ( !(s[i] in ans) ) {
                ans[s[i]] = 1;
            } else {
                ans[s[i]]++;
            }
        }

        return ans;
    }
}

console.log(count('aba'));
console.log(count(''));