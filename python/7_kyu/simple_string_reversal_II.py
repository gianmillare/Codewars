# Simple string reversal II
# https://www.codewars.com/kata/5a8d1c82373c2e099d0000ac/train/python

def solve(st,a,b):
    first = []
    last = []
    rev = []
    
    for i in range(0, len(st)):
        if i < a:
            first.append(st[i])
        elif a <= i <= b:
            rev.append(st[i])
        else:
            last.append(st[i])
    
    rev.reverse()
    
    x = ''.join(first)
    y = ''.join(rev)
    z = ''.join(last)
    
    return x + y + z
            