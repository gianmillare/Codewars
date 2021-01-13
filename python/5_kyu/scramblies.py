# Scramblies
# https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/python

# Solution 1
def scramble(s1, s2):
    
    # Change both strings into an array
    s1, s2 = list(s1), list(s2)

    # loop through s2 and look for its value inside s1, if it exists, remove it from s1
    for i in s2:
        if i not in s1:
            return False
        else:
            s1.remove(i)
    
    return True

# # Solution 2
# def scramble(s1, s2):
#     return s1

print(scramble("rkqodlw", "world"))
print(scramble("cedewaraaossoqqyt", "codewars"))
print(scramble("katas", "steak"))
print(scramble("scriptingjava", "javascript"))
print(scramble("klllciiegeugyjtioa", "lialgiekigjcyotuel"))