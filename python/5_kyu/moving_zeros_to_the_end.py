# Moving Zeros To The End
# https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/python

def move_zeros(arr):
  re_formatted = [int(i) if isinstance(i, float) else i for i in arr]
  non_zero = [i for i in re_formatted if isinstance(i, str) or str(i) != "0"]
  zero = [i for i in re_formatted if isinstance(i, int) and i == 0]

  return non_zero + zero

print(move_zeros([1,2,0,1,0,1,0,3,0,1]))
print(move_zeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9]))
print(move_zeros([0,1,None,2,False,1,0]))
print(move_zeros([0, False, -3, -8, -2, '0', 0, -9, 0, -5, 5, 0, 'a', 'b', 0, 'string', 'string', -5, '0', 'b', 0, 1, 0, 'a']))
print(move_zeros([0,1,None,2,False,1,0]))