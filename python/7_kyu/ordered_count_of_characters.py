# Ordered Count of Characters
# https://www.codewars.com/kata/57a6633153ba33189e000074/train/python

def ordered_count(inp):
    # create an array to hold the letters and to store the tuples
    letters = []
    ans = []

    # iterate through the string and append unique characters
    for i in inp:
        if i not in letters:
            letters.append(i)

    # iterate through the letters and append the letters and the count value the letter appears
    for i in letters:
        ans.append((i, inp.count(i)))
    
    return ans

print(ordered_count("abracadabra"))