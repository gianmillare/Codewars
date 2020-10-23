# Weight for Weight
# https://www.codewars.com/kata/55c6126177c9441a570000cc/train/python

def sum_digits(s):
    return sum([int(i) for i in s])

def order_weights(string_of_weights):
    original_list = string_of_weights.split()
    weights = {}
    
    for i in original_list:
        digits = sum_digits([j for j in i])
        
        if i in weights:
            weights[i].append(digits)
        else:
            weights[i] = [digits]
        
    return weights


print(order_weights("103 123 4444 99 2000"))
print(order_weights("2000 10003 1234000 44444444 9999 11 11 22 123"))