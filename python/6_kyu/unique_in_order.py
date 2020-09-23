# Unique In Order
# https://www.codewars.com/kata/54e6533c92449cc251001667/train/python

def unique_in_order(iterable):
  if len(iterable) > 0:
    ans, prev = [iterable[0]], iterable[0]

    for i in iterable:
      if i != prev:
        ans.append(i)
        prev = i
    
    return ans
  
  else:
    return []
    

print(unique_in_order("AAAABBBCCDAABBB"))