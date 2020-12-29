# Simple Fun #78: Build Palindrome
# https://www.codewars.com/kata/58942f9175f2c78f4b000108/train/python

import math

def build_palindrome(s):
    # change the string into an array
    s = list(s)
    
    # figure out if the string is Odd or Even characters long
    if len(s) % 2 != 0:

        # if odd, assign the middle index to a variable
        mid_index = (len(s) / 2) + 1
        
        # check if the first half matches the second half
        first_half = s[:mid_index - 1]
        second_half = s[mid_index:]

        if first_half == second_half[::-1]:
            return "match"
        else:
            return "no match"
    
    return mid_index

print(build_palindrome("abcba")) # abcdcba
print(build_palindrome("abcdc")) # abcdcba
# print(build_palindrome("bbbabaccbb")) # bbbabaccbbccababbb
# print(build_palindrome("cccacbbccb")) # cccacbbccbbcaccc