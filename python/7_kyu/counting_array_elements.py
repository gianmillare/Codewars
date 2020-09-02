# Counting Array Elements
# https://www.codewars.com/kata/5569b10074fe4a6715000054/train/python

def count(array):
    elements = {}
    
    for i in array:
        if i not in elements:
            elements[i] = 1
        else:
            elements[i] += 1
    
    return elements