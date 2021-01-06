# You're a square!
# https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/python

import math

def is_square(n):
    if n >= 0:
        sqrt = math.sqrt(n)
        return sqrt - int(sqrt) == 0
    else:
        return False

print(is_square(-1))
print(is_square(0))
print(is_square(3))
print(is_square(25))