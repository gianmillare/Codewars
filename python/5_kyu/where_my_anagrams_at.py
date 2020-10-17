# Where My Anagrams At?
# https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/python


# Solution 1: Sorted and Equal
def anagrams(word, words):
    return [i for i in words if sorted(i) == sorted(word)]

print(anagrams("abba", ['aabb', 'abcd', 'bbaa', 'dada']))
print(anagrams("racer", ['crazer', 'carer', 'racar', 'caers', 'racer']))
print(anagrams("laser", ['lazing', 'lazy',  'lacer']))