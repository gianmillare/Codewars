# Bit Counting
# https://www.codewars.com/kata/526571aae218b8ee490006f4/train/python

# Solution 1: Pythonic
def count_bits(n):
    bit_number = sum(list(map(int, list(str(bin(n)))[2:])))
    return bit_number

# Solution 2: Easier to read (Pythonic)
def count_bits(n):
    bit_form = bin(n)
    bit_string = str(bit_form)
    bit_list = list(bit_string[2:])
    bit_list_as_integers = list(map(int, bit_list))
    return sum(bit_list_as_integers)

# Solution 3: Best Practice: using count
def count_bits(n):
    return bin(n).count("1")
    
print(count_bits(1234))
print(count_bits(0))
print(count_bits(4))
print(count_bits(7))
print(count_bits(9))
print(count_bits(10))