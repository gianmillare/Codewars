# Array.diff
# https://www.codewars.com/kata/523f5d21c841566fde000009/train/python

# Solution 1: Most Pythonic
def array_diff(a, b):
    return [ i for i in a if i not in b ]

print(array_diff([1,2,2,1,3,2,2,1,1,2], [1, 2]))