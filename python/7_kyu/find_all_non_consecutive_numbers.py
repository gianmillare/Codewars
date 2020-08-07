# Find all non-consecutive numbers
# https://www.codewars.com/kata/58f8b35fda19c0c79400020f/train/python

def all_non_consecutive(arr):
    ans = []
    
    for i in range(1, len(arr)):
        ans_dict = {}
        
        if arr[i - 1] != arr[i] - 1:
            ans_dict['i'] = i
            ans_dict['n'] = arr[i]
            ans.append(ans_dict)
    
    return ans


print(all_non_consecutive([1,2,3,4,6,7,8,10]))