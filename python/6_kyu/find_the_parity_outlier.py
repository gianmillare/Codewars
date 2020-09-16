# Find The Parity Outlier
# https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/python

def find_outlier(integers):
    numbers = {"evens": [], "odds": []}

    for i in integers:
        if i % 2 == 0: 
            numbers["evens"].append(i)
        else:
            numbers["odds"].append(i)
    
    for key in numbers:
        if len(numbers[key]) == 1:
            return numbers[key][0]

# Best Solution: for loops and conditions
# def find_outlier(int):
#     odds = [x for x in int if x%2!=0]
#     evens= [x for x in int if x%2==0]
#     return odds[0] if len(odds)<len(evens) else evens[0]


print(find_outlier([160, 3, 1719, 19, 11, 13, -21]))
print(find_outlier([2, 4, 0, 100, 4, 11, 2602, 36]))
print(find_outlier([2, 4, 6, 8, 10, 3]))