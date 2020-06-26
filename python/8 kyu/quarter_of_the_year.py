# Quarter of the year
# https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/python

def quarter_of(month):
    if 1 <= month <= 3:
        return 1
    elif 4 <= month <= 6:
        return 2
    elif 7 <= month <= 9:
        return 3
    elif 10 <= month <= 12:
        return 4
    else:
        return 0