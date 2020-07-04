# Aerial Firefighting
# https://www.codewars.com/kata/5d10d53a4b67bb00211ca8af/train/python

def waterbombs(fire, w):
    if "x" not in fire:
        return 0
    
    fire = fire.split("Y")

    fires = []
    for i in fire:
        if i != '':
            fires.append(len(i))
    
    waterbombs = 0
    for i in fires:
        if w < i:
            if i % w == 0:
                waterbombs += int(i / w)
            else:
                waterbombs += int((i / w) + 1)
        else:   
            waterbombs += 1
    
    return waterbombs