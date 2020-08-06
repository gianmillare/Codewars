# Simple string reversal
# https://www.codewars.com/kata/5a71939d373c2e634200008e/train/python

def solve(s):
    indexes = []

    for i in range(0, len(s)):
        if s[i] == ' ':
            indexes.append(i)
    
    ans = [i for i in s if i != ' ']
    ans.reverse()

    for i in indexes:
        ans.insert(i, ' ')
    
    return ''.join(ans)

print(solve("your code rocks"))