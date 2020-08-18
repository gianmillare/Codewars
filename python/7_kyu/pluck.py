# Pluck
# https://www.codewars.com/kata/530017aac7c0f49926000084/train/python


def pluck(objs, name): 
    ans = []

    for i in objs:
        if name in i:
            ans.append(i[name])
        else:
            ans.append(None)
    
    return ans
            


# print(pluck([{'a':1, 'b':3}, {'a':2}], 'b'))
print(pluck([{'a':1}, {'a':2}], 'a'))