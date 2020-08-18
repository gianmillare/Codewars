// Pluck
// https://www.codewars.com/kata/530017aac7c0f49926000084/train/javascript

function pluck(objs, name) {
    var ans = [];

    for(var i = 0; i < objs.length; i++) {
        if ( name in objs[i] ) {
            ans.push(objs[i][name]);
        } else {
            ans.push(undefined);
        }
    }

    return ans;
}

// // Best Solution
// function pluck(objs, name) {
//     return objs.map(function(obj) { return obj[name] });
//   }

console.log(pluck([{a:1, b:3}, {a:2}], 'b'))