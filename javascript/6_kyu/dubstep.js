// Dubstep
// https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript

function songDecoder(s) {
    s = s.split("WUB");

    filteredSong = s.filter(function (x) {return x != ""});

    return filteredSong.join(" ");
}

console.log(songDecoder("AWUBBWUBC"));
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
console.log(songDecoder("WUBAWUBBWUBCWUB"));
console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));