# Basic Mathematical Operations
# https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/python

def basic_op(symbol, v1, v2):
    if symbol == '+':
        return v1 + v2
    elif symbol == '-':
        return v1 - v2
    elif symbol == '*':
        return v1 * v2
    else:
        return v1 / v2

print(basic_op('+', 4, 7))
print(basic_op('-', 15, 18))
print(basic_op('*', 5, 5))
print(basic_op('/', 49, 7))