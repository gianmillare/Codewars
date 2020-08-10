# Simple string characters
# https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/python

def solve(s):
    upper = 0
    lower = 0
    number = 0
    special = 0
    
    for i in s:
        if i.isalpha() and i.isupper():
            upper += 1
        elif i.isalpha() and i.islower():
            lower += 1
        elif i.isnumeric():
            number += 1
        else:
            special += 1
    
    return [upper, lower, number, special]