# Testing 1-2-3
# https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/python

def number(lines):
    seq, ans = 1, []

    for i in lines:
        ans.append(str(seq) + ": " + i)
        seq += 1
    
    return ans

print(number(["a", "b", "c"]))