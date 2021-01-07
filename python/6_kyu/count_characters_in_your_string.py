# Count characters in your string
# https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/python

def count(s):
    if s == "":
        return {}
    else:
        ans = {}
        s = list(s)
        for i in s:
            if i not in ans:
                ans[i] = 1
            else:
                ans[i] += 1
    
    return ans

# # Alternative, ideal answer
# from collections import Counter
# def count(s):
#     return Counter(s)

print(count('aba'))
print(count(''))