# Halving Sum
# https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/python

import math

def halving_sum(n): 
    score = 0

    while (n >= 1):
        score += n

        n = math.floor((n * 1) / 2)
    
    return score