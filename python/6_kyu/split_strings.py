# Split Strings
# https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/python

def solution(s):
    # Create the main variables, s and ans
    s, ans = list(s), []

    # if the length of string is even, append letters in pairs of 2
    if len(s) % 2 == 0:
        for i in range(0, len(s), 2):
            ans.append(s[i] + s[i + 1])
    
    
    return ans

print(solution("asdfadsf"))
# print(solution("asdfads"))