# Sort the Odd
# https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/python

def sort_array(arr):
  if len(arr) == 0:
    return arr
  else:
    odds = []
    evens = {}

    for i in arr:
      if i % 2 == 0:
        evens[i] = arr.index(i)
      else:
        odds.append(i)

    odds = sorted(odds)

    for key in evens:
      odds.insert(evens[key], key)
  
  return odds


print(sort_array([5, 3, 2, 8, 1, 4]))
print(sort_array([5, 3, 1, 8, 0]))
print(sort_array([]))