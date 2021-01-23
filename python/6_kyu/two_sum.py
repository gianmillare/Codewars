# Two Sum
# https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/python

def two_sum(n, t):
    for i in range(len(n)):
        if i != len(n):
            for j in range(i + 1, len(n)):
                if n[i] + n[j] == t:
                    return (i, j)
    
print(two_sum([1,2,3], 4))
print(two_sum([1234,5678,9012], 14690))
print(two_sum([2,2,3], 4))