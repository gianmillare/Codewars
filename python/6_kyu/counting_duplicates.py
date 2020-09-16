# Counting Duplicates
# https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/python

# Solution 1
def duplicate_count(text):
  letters = {}
  count = 0

  for i in text.lower():
    if i not in letters:
      letters[i.lower()] = 1
    else:
      letters[i.lower()] += 1
  
  for key in letters:
    if letters[key] > 1:
      count += 1
  
  return count

# Solution 2: using count function
def duplicate_count(x):
  # loop through a lowercased set of the text
  # count how many times i appears in the FULL text
  # if the the count is more than 1, append it into a list
  # return the length of that list
  return len([i for i in set(x.lower()) if x.lower().count(i) > 1])

print(duplicate_count("aabBcde"))