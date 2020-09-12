# Find the Odd Int
# https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python

# Solution 1 - Dictionary Method
# def find_it(seq):
#     counter = {}

#     for i in seq:
#         if i not in counter:
#             counter[i] = 1
#         else:
#             counter[i] += 1

#     for key in counter:
#         if counter[key] % 2 != 0:
#             return key

# Solution 2 - Count Function
def find_it(seq):
    for i in seq:
        if seq.count(i) % 2 != 0:
            return i


print(find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))