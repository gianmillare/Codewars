# Weight for Weight
# https://www.codewars.com/kata/55c6126177c9441a570000cc/train/python

# Solution 1: 
def sum_digits(s):
    return sum([int(i) for i in s])

def order_weight(string_of_weights):
    original = sorted(string_of_weights.split())
    return " ".join(sorted(original, key=sum_digits))

print(order_weights("103 123 4444 99 2000"))
print(order_weights("2000 10003 1234000 44444444 9999 11 11 22 123"))

# Note: Harder than usual challenge. Study thoroughly