# Moving Zeros To The End
# https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/python

# Solution 1: isinstance and appending two lists
def move_zeros(arr):
  reformatted = [int(i) if isinstance(i, float) else i for i in arr]
  ans, count = [], 0
  
  for i in reformatted:
    if isinstance(i, str) or str(i) != "0":
      ans.append(i)
    elif i == 0 or i == "0":
      count += 1
  
  for zero in range(count):
    ans.append(0)

  return ans

# Solution 2: isinstance python one liner
def move_zeros(arr):
  return [i for i in arr if isinstance(i, bool) or i != 0] + [i for i in arr if not isinstance(i, bool) and i == 0]

print(move_zeros([1,2,0,1,0,1,0,3,0,1]))
print(move_zeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9]))
print(move_zeros([0,1,None,2,False,1,0]))
print(move_zeros([0, False, -3, -8, -2, '0', 0, -9, 0, -5, 5, 0, 'a', 'b', 0, 'string', 'string', -5, '0', 'b', 0, 1, 0, 'a']))
print(move_zeros([0,1,None,2,False,1,0]))