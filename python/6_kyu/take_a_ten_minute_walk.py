# Take a Ten Minute Walk
# https://www.codewars.com/kata/54da539698b8a2ad76000228/train/python

def is_valid_walk(walk):
    if len(walk) != 10:
        return False
    
    if walk.count('n') != walk.count('s'):
        return False
    
    if walk.count('e') != walk.count('w'):
        return False

    return True

            

    

print(is_valid_walk(['n','s','n','s','n','s','n','s','n','s']))
print(is_valid_walk(['w','e','w','e','w','e','w','e','w','e','w','e']))
print(is_valid_walk(['n','n','n','s','n','s','n','s','n','s']))