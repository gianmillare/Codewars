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

print(duplicate_count("aabBcde"))