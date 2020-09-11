# Shortest Word
# https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/python

def find_short(s):
    # Python One Liner
    # loop through the string split by spaces create a list of string lengths, then find the min
    return min(list(len(i) for i in s.split(" ")))
    
print(find_short("Lets all go on holiday somewhere very cold"))