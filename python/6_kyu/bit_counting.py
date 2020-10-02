# Bit Counting
# https://www.codewars.com/kata/526571aae218b8ee490006f4/train/python

def count_bits(n):
    bit_number = sum(list(map(int, list(str(bin(n)))[2:])))
    return bit_number
    
    
print(count_bits(1234))
print(count_bits(0))
print(count_bits(4))
print(count_bits(7))
print(count_bits(9))
print(count_bits(10))