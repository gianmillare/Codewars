# 7 kyu Alternate capitalization
# https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/python

def capitalize(s):
  lis = list(s)
  results_even = []
  results_odd = []
  
  for i in range(len(lis)):
    if i % 2 == 0:
      results_even.append(lis[i].upper())
    else:
      results_even.append(lis[i])

  for i in range(len(lis)):
    if i % 2 == 0:
      results_odd.append(lis[i])
    else:
      results_odd.append(lis[i].upper())
    
  return [''.join(results_even), ''.join(results_odd)]

# Best Solution
def capitalize(s):
    s = ''.join(c if i%2 else c.upper() for i,c in enumerate(s))
    return [s, s.swapcase()]