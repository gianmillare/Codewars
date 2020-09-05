# Highest and Lowest
# https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python

def high_and_low(numbers):
    return ' '.join([str(max(map(int, numbers.split(' ')))), str(min(map(int, numbers.split( ' '))))])

print(high_and_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))