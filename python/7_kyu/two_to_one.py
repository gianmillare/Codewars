# Two to One
# https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/python

def longest(s1, s2):
    list_set = set(s1)
    ans = list(list_set)

    for i in s2:
        if i not in ans:
            ans.append(i)
    
    return ''.join(sorted(ans))
    

print(longest("aretheyhere", "yestheyarehere"))