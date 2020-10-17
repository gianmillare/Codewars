# Maximum Subarray Sum
# https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/python

# Solution 1: Find contingencies, Sub-Arrays Dictionary
def locate_positive(arr):
    positive_number_found = False
    for i in arr:
        if i > 0:
            positive_number_found = True
    
    return positive_number_found

def max_sequence(arr):
    # check if the array is empty
    if len(arr) == 0:
        return 0

    # check if all values are negative
    if locate_positive(arr) == False:
        return 0
    
    # create a dictionary to hold all the sub-arrays
    sub_arrays = {}

    # Loop through array to find sub_arrays and sums
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
           sub_arrays[sum(arr[i : j + 1])] = arr[i : j + 1]

    # Locate the largest key in the dictionary
    sub_max = max(sub_arrays, key=int)
    return sub_max

# print(max_sequence([]))
print(max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
# print(max_sequence([-3, -2, -1]))