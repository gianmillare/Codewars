# Multiples of 3 or 5
# https://www.codewars.com/kata/514b92a657cdc65150000006/train/python

def solution(num):
    ans = []

    for i in range(0, num):
        if i % 3 == 0 or i % 5 == 0:
            ans.append(i)

    return sum(ans)

# # Best Solution
# def solution(number):
#     return sum(x for x in range(number) if x % 3 == 0 or x % 5 == 0)

print(solution(10))