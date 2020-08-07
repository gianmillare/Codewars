# Fix string case
# https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/python

def solve(s):
    uppercase = 0
    lowercase = 0
    
    for i in s:
        if i.isupper():
            uppercase += 1
        else:
            lowercase += 1
    
    ans = []
    
    if lowercase >= uppercase:
        for i in s:
            if i.isupper():
                ans.append(i.lower())
            else:
                ans.append(i)
        return ''.join(ans)
    elif lowercase < uppercase:
        for i in s:
            if i.islower():
                ans.append(i.upper())
            else:
                ans.append(i)
        return ''.join(ans)