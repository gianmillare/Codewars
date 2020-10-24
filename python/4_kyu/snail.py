# Snail
# https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/python

def snail(snail_map):
    # we know the first array in snail_map will always be first in the answer (top)
    ans = [i for i in snail_map[0]]

    # Loop through the rest of the array, removing the last values of each array (right)
    for i in range(1, len(snail_map)):
        ans.append(snail_map[i][-1])

    # Loop through the last array and append digits in reverse chronological order (bottom)
    for i in range(len(snail_map[-1]) - 2, -1, -1):
        ans.append(snail_map[-1][i])
    
    return ans
    

print(snail([[1,2,3],
             [4,5,6],
             [7,8,9]]))

print(snail([[1,2,3],
             [8,9,4],
             [7,6,5]]))
             
print(snail([[1,2,3,1],
             [4,5,6,4],
             [7,8,9,7], 
             [7,8,9,7]]))