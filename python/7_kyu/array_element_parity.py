# 7 kyu Array element parity
# https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/python

def solve(arr):
    for i in arr:
        if arr.count(i) > 1:
            return i

    return (sum(arr))

# Best Solution
def solve(arr): return sum(set(arr))