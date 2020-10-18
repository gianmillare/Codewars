# Directions Reduction
# https://www.codewars.com/kata/550f22f4d758534c1100025a/train/python

# Solution 1: Recursion + Join and Replace
def dirReduc(arr):
    directions = " ".join(arr)  
    directions_v2 = directions.replace("NORTH SOUTH", "").replace("SOUTH NORTH", "").replace("WEST EAST", "").replace("EAST WEST", "")
    directions_v3 = directions_v2.split()

    if len(directions_v3) < len(arr):
        return dirReduc(directions_v3)
    else:
        return directions_v3
 
print(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
# print(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))