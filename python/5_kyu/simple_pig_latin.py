# Simple Pig Latin
# https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/python

# Solution 1: Split and Append
def split(word):
    return [i for i in word]

def pig_it(s):
    s = s.split(" ")
    ans = []
    
    for i in s:
        if i.isalpha() == True:
            char_list = split(i)
            move = char_list.pop(0)
            char_list.append(move)
            ans.append("".join(char_list) + "ay")
        else:
            ans.append(i)
                 
    return " ".join(ans)

print(pig_it("Pig latin is cool"))
print(pig_it("Hello World!"))
print(pig_it("This is my string"))