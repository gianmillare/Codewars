def next_id(arr):
  if len(arr) == 0:
    return 0
  
  arr = sorted(set(arr))
  if arr[0] != 0:
    return 0

  for i in range(0, len(arr)-1):
    if arr[i] + 1 != arr[i+1]:
      return arr[i] + 1
  
  return arr[-1] + 1


# best solution
# def next_id(arr):
#   t = 0
#   while t in arr:
#     t += 1
#   return t
  


lst1 = [0,3,5,1,2,4]
lst2 = [5,5,5,0,4,2,1]
lst3 = [1,4,3,2]
lst4 = []
next_id(lst1)