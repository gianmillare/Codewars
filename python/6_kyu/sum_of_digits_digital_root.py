# Sum of Digits / Digital Root
# https://www.codewars.com/kata/541c8630095125aba6000c00/train/python

def sum_if_greater_than_10(num):
    num_list = map(int, str(num))
    return sum(num_list)

def digital_root(n):
    while len(str(n)) >= 2:
        n = sum_if_greater_than_10(n)
    
    return n

print(digital_root(493193))