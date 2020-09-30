# Are they the "same"?
# https://www.codewars.com/kata/550498447451fbbd7600041c/train/python

# Solution 1: If Else
def comp(arr1, arr2):
  if arr1 == [] and arr2 == []:
    return True
  elif arr1 and arr2:
    if len(arr1) == len(arr2):
        for i in arr1:
          if i**2 in arr2:
            arr2.remove(i**2)
          else:
            return False
        return True
    else:
        return False
  else:
    return False

    

# print(comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]))