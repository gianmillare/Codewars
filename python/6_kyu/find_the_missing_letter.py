# Find The Missing Letter
# https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/python
import string

def find_missing_letter(chars):
    lower_alpha = list(string.ascii_lowercase)
    upper_alpha = list(string.ascii_uppercase)
    
    first_letter = chars[0]

    if first_letter in lower_alpha:
        start = lower_alpha.index(first_letter)
        sub_array = lower_alpha[start:start + len(chars)]

        for i in sub_array:
            if i not in chars:
                return i

    elif first_letter in upper_alpha:
        start = upper_alpha.index(first_letter)
        sub_array = upper_alpha[start:start + len(chars)]

        for i in sub_array:
            if i not in chars:
                return i
    
    

print(find_missing_letter(['a','b','c','d','f']))
print(find_missing_letter(['O','Q','R','S']))