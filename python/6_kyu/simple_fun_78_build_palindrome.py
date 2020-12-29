# Simple Fun #78: Build Palindrome
# https://www.codewars.com/kata/58942f9175f2c78f4b000108/train/python

def split_array(s):
    x = s[:len(s) / 2]
    y = s[len(s) / 2:]

    return [x, y]

def build_palindrome(s):
    
    # convert the string into an array of characters
    s = list(s)

    # split the list into two parts
    split_string = split_array(s)
    first_half = split_string[0]
    second_half = split_string[1]

    print(first_half)
    print(second_half)

print(build_palindrome("gfcacfgfgg")) # gfcacfgfggfgfcacfg
print(build_palindrome("aaabbabaa")) # aaabbabaababbaaa
print(build_palindrome("bcabca")) # bcabcacbacb