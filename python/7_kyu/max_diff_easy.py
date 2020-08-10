# max diff - easy
# https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/python

def max_diff(lst):
    if len(lst) == 0 or len(lst) == 1:
        return 0
    else:
        return max(lst) - min(lst)