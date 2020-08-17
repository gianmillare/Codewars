# Return a string's even characters
# https://www.codewars.com/kata/566044325f8fddc1c000002c/train/python

def even_chars(st): 
    ans = []
    
    if 2 <= len(st) < 100:
        for i in range(0, len(st)):
            if i % 2 != 0:
                ans.append(st[i])
    else:
        return "invalid string"
    
    return ans
                