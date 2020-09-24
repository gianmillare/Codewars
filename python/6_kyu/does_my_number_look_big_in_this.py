# Does my number look big in this?
# https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/python

def narcissistic(value):
    expo = len(str(value))
    n = map(int, str(value))
    ans = 0

    for i in n:
        ans += i**expo
    
    return ans == value


print(narcissistic(7))
print(narcissistic(371))
print(narcissistic(122))
print(narcissistic(4887))