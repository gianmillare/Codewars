# Diagonals sum
# https://www.codewars.com/kata/5592fc599a7f40adac0000a8/train/python

def sum_diagonals(matrix):
    ans = []
    x = 0
    y = -1

    for i in matrix:
        ans.append(i[x])
        ans.append(i[y])
        x += 1
        y -= 1

    return sum(ans)

print(sum_diagonals([[1,2,3], [4,5,6], [7,8,9]]))