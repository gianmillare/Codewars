# Sum of Array Singles
# https://www.codewars.com/kata/59f11118a5e129e591000134/train/python

def repeats(arr):
    numbers = {}
    ans = []
    
    for i in arr:
        if i in numbers:
            numbers[i] += 1
        else:
            numbers[i] = 1
    
    for key in numbers:
        if numbers[key] == 1:
            ans.append(key)
    
    return sum(ans)

# # Best Solution
# def repeats(arr):
#     return sum([x for x in arr if arr.count(x) == 1])