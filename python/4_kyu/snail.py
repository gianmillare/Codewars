# Snail
# https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/python

res = []

def snail(snail_map):
    # we know the first array in snail_map will always be first in the answer (top)
    if snail_map:
        ans = [i for i in snail_map[0]]
        snail_map.pop(0)

    # Loop through the rest of the array, removing the last values of each array (right)
    if snail_map:
        for i in range(len(snail_map)):
            remove_value_to_append = snail_map[i].pop(-1)
            ans.append(remove_value_to_append)

    # Loop through the last array and append digits in reverse chronological order (bottom)
    if snail_map:
        bottom_array = snail_map[-1]
        
        for i in range(len(bottom_array) - 1, -1, -1):
            remove_value_to_append = snail_map[-1].pop(i)
            ans.append(remove_value_to_append)
    
    # Remove the empty arrays
    if snail_map:
        snail_map.remove([])

    # Loop through the  1 value of each list excluding the first and last arrays
    if snail_map:
        for i in range(len(snail_map) - 1, -1, -1):
            remove_value_to_append = snail_map[i].pop(0)
            ans.append(remove_value_to_append)
    
    # transfer array from ans into res
    res.append(ans)
    
    # if there is more to the trail, recursive function
    if snail_map:
        return snail(snail_map)
    # if trail is empty, append all arrays inside array res to a completed trail array
    else:
        completed_snail_trail = []
        for i in res:
            for j in i:
                completed_snail_trail.append(j)
        
        # Because of recursion, clear res to prevent appendage from other arrays
        del res[:]
        
        return completed_snail_trail


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