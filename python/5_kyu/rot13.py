# Rot13
# https://www.codewars.com/kata/530e15517bc88ac656000716/train/python

# Solution 1 (My Solution): Iterating through dictionary + 
# Create the cypher where each letter is given an integer
def encode(arr):
    cypher, count = {}, 0

    for i in arr:
        cypher[count] = i
        count += 1
    
    return cypher

# Create searching function to search for encrypted letter
def search_cypher(x, cypher):
    found = False

    for key, value in cypher.items():
        if value == x:
            found = True
    
    return found

# Encrypt the message using rot13 function
def rot13(message):
    # cypher the alphabet into a dictionary
    cypher_lowecase = encode("abcdefghijklmnopqrstuvwxyz")
    cypher_uppercase = encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ")

    # Create an empty array to append into
    res = []

    # Iterate through the message, adding 13 to the encrypt character
    for i in list(message):
        if search_cypher(i, cypher_lowecase):
            for key, value in cypher_lowecase.items():
                if value == i:
                    encrypted_char = key
                    if encrypted_char + 13 >= 26:
                        encrypted13 = (encrypted_char + 13) - 26
                        res.append(cypher_lowecase[encrypted13])
                    else:
                        encrypted13 = encrypted_char + 13
                        res.append(cypher_lowecase[encrypted13])
        elif search_cypher(i, cypher_uppercase):
            for key, value in cypher_uppercase.items():
                if value == i:
                    encrypted_char = key
                    if encrypted_char + 13 >= 26:
                        encrypted13 = (encrypted_char + 13) - 26
                        res.append(cypher_uppercase[encrypted13])
                    else:
                        encrypted13 = encrypted_char + 13
                        res.append(cypher_uppercase[encrypted13])
        else:
            res.append(i)
        
    return "".join(res)

# Solution 2: Arbitrary solution from another user (does not work on challenge, only in IDE)
import string
from codecs import encode as _dont_use_this_

def rot13(message):
    return message.encode("rot13")

print(rot13("test"))
print(rot13("Test"))