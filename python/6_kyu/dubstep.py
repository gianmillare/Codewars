# Dubstep
# https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/python

# Solution 1: Split, Remove, Join
def song_decoder(s):
    s = s.split("WUB")
    while "" in s:
        s.remove("")
    return " ".join(s)

print(song_decoder("AWUBBWUBC"))
print(song_decoder("AWUBWUBWUBBWUBWUBWUBC"))
print(song_decoder("WUBAWUBBWUBCWUB"))
print(song_decoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))