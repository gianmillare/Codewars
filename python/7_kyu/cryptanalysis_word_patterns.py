# Cryptanalysis Word Patterns
# https://www.codewars.com/kata/5f3142b3a28d9b002ef58f5e/train/python

def word_pattern(word):
    # create a count variable to hold current indices
    indices = 0
    # create an empty dictionary to hold letter:indices values
    crypto = {}

    # iterate through the word and append unique letters and their corresponding indices
    for i in word:
        if i.lower() not in crypto:
            crypto[i.lower()] = str(indices)
            indices += 1

    # create an empty array to hold the indices before being joined by .
    ans = []

    # iterate through the word again and append the value corresponding to the letter from the dictionary
    for i in word:
        ans.append(crypto[i.lower()])
    
    # return the joined version of the answer array
    return '.'.join(ans)

    

print(word_pattern("Hippopotomonstrosesquippedaliophobia"))