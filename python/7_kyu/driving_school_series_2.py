# Driving School Series #2
# https://www.codewars.com/kata/589b1c15081bcbfe6700017a/train/python

def cost(mins):
    if 5 < mins <= 65:
        return 30
    elif mins > 65:
        price = 30
        mins -= 60
        
        while mins > 5:
            price += 10
            mins -= 30
    
    return price
            