# GCD sum
# https://www.codewars.com/kata/5dd259444228280032b1ed2a/train/python

def solve(s,g):
    results = []
    
    if s % g == 0 or g % s == 0:

      for i in range(g, s):
        if i % g == 0:
          results.append(i)
          break
      
      for i in range(g, s):
        if i + results[0] == s:
          results.append(i)
          break

      return tuple(results)
    
    else:
      return -1

# Best Solution
def solve(s,g):
    return -1 if s % g else (g, s - g)