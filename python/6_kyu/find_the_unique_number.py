# Find the unique number
# https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/python

# Solution 1: Pythonic For Loop
def find_uniq(arr):
  return [i for i in arr if arr.count(i) == 1][0]

# Solution 2: Set Count                                
def find_uniq(arr):
  unique = list(set(arr))
  
  for i in unique:
    counter = arr.count(i)
    if counter == 1:
      return i

print(find_uniq([ 1, 1, 1, 2, 1, 1 ]))
print(find_uniq([ 0, 0, 0.55, 0, 0 ]))
print(find_uniq([ 3, 10, 3, 3, 3 ])) 