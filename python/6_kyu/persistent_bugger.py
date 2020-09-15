# Persistent Bugger
# https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/python

def multiply(num):
    num_list = [int(x) for x in list(str(num))]
    result = 1

    for i in num_list:
        result = result * i
    
    return result


def persistence(n):
    count = 0

    while len(str(n)) >= 2:
        count += 1
        n = multiply(n)

    return count

print(persistence(999))