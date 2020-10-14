# Human Readable Time
# https://www.codewars.com/kata/52685f7382004e774f0001f7/train/python

# Solution 1: While loop and Join
def make_readable(time):
    hours, minutes, seconds = 0, 0, 0

    while time >= 3600:
        hours += 1
        time -= 3600
    
    if hours < 10:
        hours = "0" + str(hours)
    
    while time >= 60:
        minutes += 1
        time -= 60
    
    if minutes < 10:
        minutes = "0" + str(minutes)
    
    seconds = time
    if seconds < 10:
        seconds = "0" + str(seconds)


    return ":".join([str(hours), str(minutes), str(seconds)])

# Solution 2: Divide, Modulus, and Format
def make_readable(s):
    h = int(s / 3600)
    m = int((s % 3600) / 60)
    s = int(s % 60)
    return "{:02d}:{:02d}:{:02d}".format(h, m, s)        

print(make_readable(0))
print(make_readable(5))
print(make_readable(60))
print(make_readable(86399))
print(make_readable(359999))