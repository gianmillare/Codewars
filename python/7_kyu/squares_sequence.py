# Squares Sequence
# https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/python

def squares(x, n):
    ans = []

    while len(ans) < n:
        ans.append(x)
        x = x**2
    
    return ans



print(squares(2, 5))