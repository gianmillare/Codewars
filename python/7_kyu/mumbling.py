# Mumbling
# https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python

def accum(s):
    lowercase = 0
    ans = []
    
    for i in range(0, len(s)):
            ans.append(s[i].upper() + (s[i].lower() * lowercase))
            lowercase += 1
            if i != len(s) - 1:
                ans.append("-")
    
    return ''.join(ans)

print(accum("ZpglnRxqenU"))