# Disemvowel Trolls
# https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python

vowels = "aeiouAEIOU"

def disemvowel(s):
    s = list(s)
    res = []
    for i in s:
        if i not in vowels:
            res.append(i)
    
    return "".join(res)