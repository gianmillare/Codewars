// Build Tower
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function towerBuilder(n) {
    if ( n == 1) {
        return ["*"];
    } else {
        var length = n + (n - 1);
        var ans = [];
        
        for (var i = 1; i < length + 1; i += 2) {
            var spaces = length - i;
            var str1 = ' '.repeat(parseInt(spaces / 2));
            var str2 = str1.concat("*".repeat(i));
            var str3 = str2.concat(' '.repeat(parseInt(spaces / 2)));
            ans.push(str3);
        }
        return ans;
    }
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));