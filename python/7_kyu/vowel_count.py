# Vowel Count
# https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/python

vowels = ['a', 'e', 'i', 'o', 'u']

def get_count(input_str):
    count = 0
    
    for i in input_str:
        if i in vowels:
            count += 1
    
    return count