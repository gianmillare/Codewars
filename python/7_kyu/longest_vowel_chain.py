# Longest vowel chain
# https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/python

def solve(s):
    vowels = ['a', 'e', 'i', 'o', 'u']
    results = []
    count = 0
    for i in s:
        if i in vowels:
            count += 1
        else:
            results.append(count)
            count = 0
    
    results.append(count)
    return max(results)
            
        