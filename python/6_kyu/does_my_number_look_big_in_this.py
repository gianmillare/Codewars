# Does my number look big in this?
# https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/python

# Solution 1: Less Pythonic
def narcissistic(value):
    expo = len(str(value))
    n = map(int, str(value))
    ans = 0

    for i in n:
        ans += i**expo
    
    return ans == value

# Solution 2: More Pythonic
def narcissistic(value):
    return value == sum(int(i) ** len(str(value)) for i in str(value))

print(narcissistic(7))
print(narcissistic(371))
print(narcissistic(122))
print(narcissistic(4887))