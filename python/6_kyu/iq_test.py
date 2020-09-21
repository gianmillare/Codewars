# IQ Test
# https://www.codewars.com/kata/552c028c030765286c00007d/train/python

# Solution 1: Map Function
def iq_test(numbers):
  nums =  list(map(int, numbers.split(" ")))
  even_or_odd = {"even": [], "odd": []}
  
  for i in nums:
    if i % 2 == 0:
      even_or_odd['even'].append(i)
    else:
      even_or_odd['odd'].append(i)
  
  for key in even_or_odd:
    if len(even_or_odd[key]) == 1:
      for i in range(0, len(nums)):
        if nums[i] == even_or_odd[key][0]:
          return i + 1

# Solution 2: Index, Pythonic Solution
def iq_test(numbers):
  num = [int(i) % 2 for i in numbers.split(" ")]
  if num.count(0) > 1:
    return num.index(1) + 1
  else:
    return num.index(0) + 1

print(iq_test("2 4 7 8 10"))
print(iq_test("1 2 1 1"))
print(iq_test("1 2 2"))