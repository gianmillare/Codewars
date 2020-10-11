// Dubstep
// https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript

// Solution 1: Split, Filter, Join
function songDecoder(s) {
    s = s.split("WUB");

    filteredSong = s.filter(function (x) {return x != ""});

    return filteredSong.join(" ");
}

// Solution 2: Split, Filter boolean, join
function songDecoder(s) {
    return s.split("WUB").filter(Boolean).join(" ");
}

console.log(songDecoder("AWUBBWUBC"));
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
console.log(songDecoder("WUBAWUBBWUBCWUB"));
console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));