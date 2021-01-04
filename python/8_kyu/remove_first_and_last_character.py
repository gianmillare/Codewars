# Remove First and Last Character
# https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/python

def remove_char(s):
    s = list(s)

    return "".join(s[1:len(s) - 1])

print(remove_char("eloquent"))
print(remove_char("country"))
print(remove_char("person"))