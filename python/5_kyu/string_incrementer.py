# String incrementer
# https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/python

# Rules:
# 1. if the string is empty, return 1
# 2. if the string does not end with a number, append 1 and return the new string
# 3. if the string ends with a number, incrememt the number by 1

def incrememt_string(s):
    
    # Rule 1
    if len(s) == 0:
        return 1
    
    # Rule 2
    s = list(s)
    if s[-1].isalpha():
        s.append("1")
        return "".join(s)
    
    # Rule 3
    


print(incrememt_string("foo"))
print(incrememt_string("foobar001"))
print(incrememt_string("foobar99"))
print(incrememt_string("foobar099"))
print(incrememt_string(""))